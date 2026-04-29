"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactModal from "../common/ContactModal";
import { useTheme } from "../../app/context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { List, X, MagnifyingGlass, Sun, Moon, User, SignOut, Heart } from "phosphor-react";
import OfferHeader from "./OfferHeader";
import GlobalHouseSearchBar from "../search/GlobalHouseSearchBar";

/** Desktop nav — matches Untitled-1 links, wired to real routes */
const DESKTOP_NAV_LINKS = [
    // { name: "Home", href: "/" },
    { name: "college", href: "/" },
    { name: "jobs", href: "/" },
    { name: "accommodation", href: "/" },
    // { name: "About", href: "/about-us" },
    // { name: "Properties", href: "/properties/uk/london" },
    // { name: "Contact", href: "/contact-us" },
    // { name: "Blog", href: "/post" },
    // { name: "Partner with us", href: "/partners", highlight: true },
];

function isNavLinkActive(href, pathname) {
    if (!pathname || !href) return false;
    if (href === "/") return pathname === "/";
    const path =
        pathname.length > 1 && pathname.endsWith("/")
            ? pathname.slice(0, -1)
            : pathname;
    if (path === href) return true;
    return path.startsWith(`${href}/`);
}

/** Any city listing (/properties/uk/london) or legacy /properties before redirect */
function isPropertyListingNav(pathname) {
    if (!pathname) return false;
    if (pathname === "/properties" || pathname === "/properties/") return true;
    return /^\/properties\/[^/]+\/[^/]+$/.test(pathname);
}

const HeaderHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [showCTA, setShowCTA] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const profileDesktopRef = useRef(null);
    const profileMobileRef = useRef(null);
    const desktopSearchRef = useRef(null);
    const mobileSearchRef = useRef(null);
    const [searchData, setSearchData] = useState({
        location: "",
        moveInDate: "",
        duration: "",
    });

    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = (() => {
        try {
            return useTheme();
        } catch (e) {
            return { theme: "light", toggleTheme: () => {} };
        }
    })();
    const pathname = usePathname();
    const { isAuthenticated, user, openAuthModal, logout } = (() => {
        try {
            return useAuth();
        } catch (e) {
            return { isAuthenticated: false, user: null, openAuthModal: () => {}, logout: () => {} };
        }
    })();
    const isHomePage = pathname === "/";
    // Listing hub (/properties/uk/london, etc.) — same header treatment as home; not detail URLs
    const isproperties =
        typeof pathname === "string" &&
        /^\/properties\/[^/]+\/[^/]+$/.test(pathname);
    const hideHeader = pathname?.startsWith("/partner-dashboard");

    // useLayoutEffect: first paint already includes the header (fixed/absolute).
    // useEffect would paint one frame with null → huge CLS on detail pages and elsewhere.
    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const handle = (e) => setIsDesktop(e.matches);
        // set initial
        setIsDesktop(mq.matches);
        if (mq.addEventListener) mq.addEventListener("change", handle);
        else mq.addListener(handle);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handle);
            else mq.removeListener(handle);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => setShowCTA(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => setIsMenuOpen(false), [pathname]);
    useEffect(() => {
        setIsSearchExpanded(false);
        setIsMobileSearchOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const inDesktop =
                profileDesktopRef.current?.contains(e.target) ?? false;
            const inMobile =
                profileMobileRef.current?.contains(e.target) ?? false;
            if (!inDesktop && !inMobile) {
                setProfileDropdownOpen(false);
            }
        };
        if (profileDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
            return () =>
                document.removeEventListener("click", handleClickOutside);
        }
    }, [profileDropdownOpen]);

    const handleGetStartedClick = (e) => {
        e.preventDefault();
        setIsContactModalOpen(true);
    };

    const handleContactModalSubmit = async () => {
        try {
            await new Promise((r) => setTimeout(r, 1000));
            setIsContactModalOpen(false);
            alert("Thank you! We'll contact you soon with the best options.");
        } catch {
            alert("There was an error. Please try again.");
        }
    };

    if (hideHeader) return null;

    if (!mounted) return null;

    const isDark = theme === "dark";

    const profileButton = (
        <button
            type="button"
            onClick={() => setProfileDropdownOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 transition-all dark:border-white/30 dark:bg-white/10 dark:hover:border-white/60"
            aria-label="Profile menu"
        >
            {user?.image || user?.profile_image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={user.image || user.profile_image}
                    alt={user?.name || "Profile"}
                    className="h-full w-full object-cover"
                />
            ) : (
                <User size={22} weight="bold" className="text-slate-800 dark:text-white" />
            )}
        </button>
    );

    const profileDropdown = profileDropdownOpen ? (
        <div
            className={`absolute right-0 top-full z-[80] mt-2 min-w-[140px] rounded-xl border py-1 shadow-lg ${
                isDark
                    ? "border-white/10 bg-[#161D83]"
                    : "border-[#CDCDCD]/50 bg-white"
            }`}
        >
            <Link
                href="/profile"
                onClick={() => setProfileDropdownOpen(false)}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    isDark
                        ? "text-white hover:bg-white/10"
                        : "text-[#052659] hover:bg-[#161D83]/10"
                }`}
            >
                <User size={18} weight="bold" />
                Profile
            </Link>
            <Link
                href="/wishlist"
                onClick={() => setProfileDropdownOpen(false)}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    isDark
                        ? "text-white hover:bg-white/10"
                        : "text-[#052659] hover:bg-[#161D83]/10"
                }`}
            >
                <Heart size={18} weight="bold" />
                Wishlist
            </Link>
            <button
                type="button"
                onClick={() => {
                    logout();
                    setProfileDropdownOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    isDark
                        ? "text-white hover:bg-white/10"
                        : "text-[#052659] hover:bg-[#161D83]/10"
                }`}
            >
                <SignOut size={18} weight="bold" />
                Logout
            </button>
        </div>
    ) : null;

    return (
        <>
            <header
                className={`left-0 right-0 top-0 z-50 ${
                    isHomePage || isproperties ? "absolute" : "fixed"
                }`}
            >
                <OfferHeader />

                {/* Desktop — layout from Untitled-1 */}
                {isDesktop ? (
                    <div className="pointer-events-none fixed left-0 right-0 top-6 z-[60] hidden justify-center px-4 lg:flex">
                        <nav
                            className={`pointer-events-auto relative flex h-[72px] w-full max-w-[1200px] items-center overflow-visible rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 dark:bg-[#fdfdfd] dark:shadow-2xl ${
                                isSearchExpanded
                                    ? "border-0"
                                    : "border border-slate-200 dark:border-white/5"
                            }`}
                        >
                            {/* Default */}
                            <div
                                id="nav-default"
                                className={[
                                    "absolute inset-0 flex h-full w-full items-center justify-between px-6 transition-all duration-300 md:px-8",
                                    isSearchExpanded
                                        ? "pointer-events-none translate-y-4 opacity-0"
                                        : "pointer-events-auto translate-y-0 opacity-100",
                                ].join(" ")}
                            >
                                <Link href="/" className="flex shrink-0 items-center">
                                    <Image
                                        src="/images/ads/mobile/LIVING-Blue.png"
                                        alt="Acolyte Living"
                                        width={140}
                                        height={40}
                                        className="h-6 w-auto object-contain  md:h-12"
                                        priority
                                    />
                                </Link>

                                <div className="hidden items-center gap-8 text-[14px] lg:flex">
                                    {DESKTOP_NAV_LINKS.map(({ name, href, highlight }) => {
                                        const active =
                                            name === "Properties"
                                                ? isPropertyListingNav(pathname)
                                                : isNavLinkActive(href, pathname);
                                        return (
                                            <Link
                                                key={name}
                                                href={href}
                                                aria-current={active ? "page" : undefined}
                                                className={`transition-colors font-bold uppercase tracking-wide ${
                                                    active
                                                        ? "font-bold text-[#161D83] dark:text-[#161D83]"
                                                        : `text-slate-600 hover:text-black dark:text-[#161D83] dark:hover:text-[#161D83] ${
                                                              highlight
                                                                  ? "font-bold text-slate-900 dark:text-white"
                                                                  : ""
                                                          }`
                                                }`}
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                                    {isAuthenticated ? (
                                        <div className="relative" ref={profileDesktopRef}>
                                            {profileButton}
                                            {profileDropdown}
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={openAuthModal}
                                            className="hidden rounded-full bg-[#161D83] px-7 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-[#313bc9] dark:bg-[#161D83] dark:text-white dark:hover:bg-blue-900 sm:block"
                                        >
                                            Get Started Free
                                        </button>
                                    )}
                                    <div className="hidden h-8 w-px bg-slate-200 dark:bg-white/20 sm:block" />
                                    {isHomePage ? (
                                        <button
                                            type="button"
                                            onClick={toggleTheme}
                                            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-black hover:text-slate-900 dark:text-black/80 dark:hover:bg-black/10 dark:hover:text-black"
                                            title="Toggle Theme"
                                            aria-label="Toggle theme"
                                        >
                                            {isDark ? (
                                                <Sun size={20} weight="regular" />
                                            ) : (
                                                <Moon size={20} weight="regular" />
                                            )}
                                        </button>
                                    ) : null}
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchExpanded(true)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-none transition-colors hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-white"
                                        title="Search"
                                        aria-label="Open search"
                                    >
                                        <MagnifyingGlass size={20} weight="bold" />
                                    </button>
                                </div>
                            </div>

                            {/* Search */}
                            <div
                                id="nav-search"
                                className={[
                                    "absolute inset-0 flex h-full w-full items-center justify-between px-6 transition-all duration-300 md:px-8",
                                    isSearchExpanded
                                        ? "pointer-events-auto translate-y-0 opacity-100"
                                        : "pointer-events-none translate-y-4 opacity-0",
                                ].join(" ")}
                            >
                                <div className="flex h-full shrink-0 items-center gap-5">
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchExpanded(false)}
                                        className="group flex shrink-0 cursor-pointer items-center"
                                        title="Close Search"
                                        aria-label="Close search"
                                    >
                                        <Image
                                            src="/images/ads/mobile/LIVING-Blue.png"
                                            alt="Acolyte Living"
                                            width={140}
                                            height={40}
                                            className="h-6 w-auto object-contain transition-opacity group-hover:opacity-80 dark:invert md:h-7"
                                        />
                                    </button>
                                    <div className="hidden h-8 w-px bg-slate-200 dark:bg-white/20 sm:block" />
                                </div>

                                <div className="relative flex h-full min-w-0 flex-1 items-center px-2 sm:px-4">
                                    {isSearchExpanded ? (
                                        <GlobalHouseSearchBar
                                            ref={desktopSearchRef}
                                            variant="inline"
                                            placeholder="Search City, Universities or property"
                                            autoFocus
                                            defaultOpen
                                            onSelectResult={() =>
                                                setIsSearchExpanded(false)
                                            }
                                        />
                                    ) : null}
                                </div>

                                <div className="flex shrink-0 items-center gap-2 pl-2 md:gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            desktopSearchRef.current?.focusAndOpen()
                                        }
                                        className="flex h-10 items-center justify-center rounded-full bg-[#161D83] px-6 text-[14px] font-bold text-white shadow-none transition-all hover:scale-105 hover:bg-blue-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 md:px-8"
                                    >
                                        Search
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchExpanded(false)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                                        title="Exit Search"
                                        aria-label="Exit search"
                                    >
                                        <X size={20} weight="bold" />
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                ) : null}

                {/* Mobile — compact bar (not the old pill header) */}
                {!isDesktop ? (
                    <>
                        <div className="fixed left-0 right-0 top-6 z-[60] flex justify-center px-4 lg:hidden">
                            <div className="flex h-14 w-full max-w-[1200px] items-center justify-between rounded-full border border-slate-200 bg-white px-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:border-white/5 dark:bg-white dark:shadow-2xl">
                                <Link href="/" className="flex shrink-0 items-center">
                                    <Image
                                        src="/images/ads/mobile/LIVING-Blue.png"
                                        alt="Acolyte Living"
                                        width={120}
                                        height={32}
                                        className="h-6 w-auto object-contain"
                                        priority
                                    />
                                </Link>
                                <div className="flex items-center gap-2">
                                    {isAuthenticated ? (
                                        <div className="relative" ref={profileMobileRef}>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setProfileDropdownOpen((v) => !v)
                                                }
                                                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 dark:border-white/30"
                                                aria-label="Profile menu"
                                            >
                                                {user?.image || user?.profile_image ? (
                                                    <img
                                                        src={
                                                            user.image ||
                                                            user.profile_image
                                                        }
                                                        alt={user?.name || "Profile"}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <User
                                                        size={20}
                                                        weight="bold"
                                                        className="text-[#161D83] dark:text-white"
                                                    />
                                                )}
                                            </button>
                                            {profileDropdown}
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={openAuthModal}
                                            className="rounded-full bg-[#161D83] px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-slate-900"
                                        >
                                            Login
                                        </button>
                                    )}
                                    {isHomePage ? (
                                        <button
                                            type="button"
                                            onClick={toggleTheme}
                                            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-white/80"
                                            aria-label="Toggle theme"
                                        >
                                            {isDark ? (
                                                <Sun size={18} weight="regular" />
                                            ) : (
                                                <Moon size={18} weight="regular" />
                                            )}
                                        </button>
                                    ) : null}
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileSearchOpen(true)}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#161D83] dark:bg-slate-200"
                                        aria-label="Open search"
                                    >
                                        <MagnifyingGlass size={18} weight="bold" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="flex h-9 w-9 items-center justify-center rounded-full text-[#161D83] dark:text-white"
                                        aria-label="Toggle menu"
                                    >
                                        {isMenuOpen ? (
                                            <X size={22} weight="bold" />
                                        ) : (
                                            <List size={22} weight="bold" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile search overlay */}
                        {isMobileSearchOpen ? (
                            <div
                                className="fixed inset-0 z-[70] bg-black/40 lg:hidden"
                                onClick={() => setIsMobileSearchOpen(false)}
                                aria-hidden
                            >
                                <div
                                    className="absolute left-4 right-4 top-24 rounded-2xl border-0 bg-white p-4 shadow-xl dark:bg-[#2a2a2a]"
                                    onClick={(e) => e.stopPropagation()}
                                    role="dialog"
                                    aria-label="Search"
                                >
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-sm font-semibold text-slate-800 dark:text-white">
                                            Search
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setIsMobileSearchOpen(false)
                                            }
                                            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
                                            aria-label="Close"
                                        >
                                            <X size={20} weight="bold" />
                                        </button>
                                    </div>
                                    <GlobalHouseSearchBar
                                        ref={mobileSearchRef}
                                        variant="inline"
                                        placeholder="Search City, Universities or property"
                                        autoFocus
                                        defaultOpen
                                        onSelectResult={() =>
                                            setIsMobileSearchOpen(false)
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            mobileSearchRef.current?.focusAndOpen()
                                        }
                                        className="mt-3 w-full rounded-full bg-[#161D83] py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-900"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        ) : null}

                        {/* Mobile menu */}
                        <div
                            className={`absolute left-0 right-0 top-full z-50 mx-4 mt-[4.5rem] rounded-2xl shadow-xl transition-all duration-200 lg:hidden ${
                                isMenuOpen
                                    ? "translate-y-0 opacity-100"
                                    : "pointer-events-none -translate-y-2 opacity-0"
                            } ${
                                isDark
                                    ? "bg-[#161D83]"
                                    : "border border-[#CDCDCD]/50 bg-white"
                            }`}
                        >
                            <div className="space-y-1 py-4 px-4">
                                {DESKTOP_NAV_LINKS.map(({ name, href }) => {
                                    const active =
                                        name === "Properties"
                                            ? isPropertyListingNav(pathname)
                                            : isNavLinkActive(href, pathname);
                                    return (
                                        <Link
                                            key={name}
                                            href={href}
                                            aria-current={active ? "page" : undefined}
                                            className={`block rounded-xl px-4 py-3 font-medium ${
                                                active
                                                    ? isDark
                                                        ? "bg-white/15 font-bold text-white"
                                                        : "bg-[#0B52BF]/10 font-bold text-[#0B52BF]"
                                                    : isDark
                                                      ? "text-white hover:bg-white/10"
                                                      : "text-[#052659] hover:bg-black/5"
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ) : null}
            </header>

            {showCTA && (
                <div className="fixed bottom-5 right-5 z-40 md:hidden">
                    <button
                        type="button"
                        onClick={handleGetStartedClick}
                        className="rounded-full bg-[#161D83] p-3 text-white shadow-lg transition-opacity hover:opacity-90"
                        aria-label="Get started"
                    >
                        <MagnifyingGlass size={24} weight="bold" />
                    </button>
                </div>
            )}

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden
                />
            )}

            {isContactModalOpen && (
                <ContactModal
                    isOpen={isContactModalOpen}
                    onClose={() => setIsContactModalOpen(false)}
                    onSubmit={handleContactModalSubmit}
                    searchData={searchData}
                />
            )}

        </>
    );
};

export default HeaderHome;
