import { 
  UploadCloud, 
  GraduationCap, 
  Briefcase, 
  Home, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  FileText, 
  Globe2, 
  BadgeCheck, 
  Banknote,
  PlaneTakeoff,
  ShieldCheck,
  PercentCircle,
  SearchIcon,
  FilePen,
  Building2
} from "lucide-react";
import { GrDocumentUpload } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import popularSearchData from "../../app/data/popularSearchData.json";
import Link from "next/link";

export default function Main() {
  return (
    <main className="bg-[#f8fafc] max-w-screen mx-auto overflow-hidden text-slate-900 font-sans selection:bg-[#161D83] selection:text-white pb-10 pt-20">

      {/* HERO */}
      <section className="relative text-center py-10 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100/60 border border-slate-200 text-[12px] font-bold uppercase tracking-widest mb-6 text-[#161D83] shadow-sm">
          <ShieldCheck className="w-6 h-6 text-[#161D83]" />
          <span>0% Commission · No Agents · AI Powered · All in one place</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
          Study. Work. Live. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-[#161D83]">
            Abroad Made Simple.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
Upload your resume once — we match you with the right colleges, jobs,
and homes abroad. No agents. No commission. Ever.        </p>

        {/* Quick Links / Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 bg-[#161D83] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition-transform cursor-pointer">
            <GraduationCap className="w-5 h-5" /> College
          </div>
          <div className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all cursor-pointer">
            <Briefcase className="w-5 h-5 text-slate-400" /> Jobs
          </div>
          <div className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all cursor-pointer">
            <Home className="w-5 h-5 text-slate-400" /> Accommodation
          </div>
        </div>

        <div className="flex flex-row scale-75 md:scale-100 sm:flex-row  items-center justify-center gap-6 mt-12 text-[24px] sm:text-[32px] md:40px lg:[48px] font-bold  tracking-wider uppercase">
          <p className="flex items-center gap-1.5"><RiDiscountPercentLine className="w-16 h-16 text-[#161D83]" /> Zero Commission</p>
          <p className="flex items-center gap-1.5"><ShieldCheck className="w-16 h-16 text-[#161D83]" />Zero Surprise</p>
          
          
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
  {[
    { n: "1000+", l: "Universities" },
    { n: "50K+", l: "Jobs Listed Abroad" },
    { n: "25K+", l: "Verified Rooms" },
  ].map((item, i) => (
    <div
      key={i}
      className={`
        bg-white px-8 py-8 rounded-[24px] text-center shadow-xl shadow-slate-200/50 border border-slate-100 
        group hover:-translate-y-1 transition-transform duration-300
        ${i === 2 ? "col-span-2 md:col-span-1" : ""}
      `}
    >
      <h2 className="text-4xl font-bold text-[#161D83] mb-1">
        {item.n}
      </h2>
      <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
        {item.l}
      </p>
    </div>
  ))}
</div>
      </section>

      {/* UPLOAD */}
      <section className="max-w-5xl mx-auto text-center py-8 md:py-20 px-4">
        <div className="mb-12">
            <p className="text-[#161D83] font-bold text-sm mb-6 uppercase">How it works</p>
          <h2 className="text-3xl max-w-3xl mx-auto sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-10">
            One resume. <span className="">Colleges, jobs & homes — matched instantly.</span>
          </h2>
          <p className="text-lg text-slate-500">Our AI reads yours profile and surfaces the most relevant opportunities abroad - personalised to you, with zero middlemen involved.</p>
        </div>

        <div className="bg-white border-3 border-dashed border-[#161D8333] bg-gradient-to-b from-blue-50/50 to-transparent p-12 rounded-[32px] max-w-2xl mx-auto hover:border-[#161D83]/50 hover:bg-blue-50/80 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-100/50">
          <div className="w-20 h-20 bg-white border border-blue-100 shadow-sm text-[#161D83] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <IoDocumentTextOutline className="w-10 h-10 " />
          </div>
          <p className="text-2xl font-bold text-slate-800 mb-2">Drop your resume here</p>
          <p className="text-[15px] font-medium text-slate-500 mb-8">
PDF or DOCX — we handle everything after          </p>
          <button className="bg-[#161D83] text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-xl shadow-blue-900/20 hover:bg-blue-900 hover:shadow-blue-900/40 transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto">
            Upload & Get Matched <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className=" hidden md:block">
  <div className="flex flex-row justify-center items-center gap-4 mt-12 relative z-10">
          {["Upload resume once", "AI finds your matches", "Apply directly", "Move abroad,sorted"].map((s, i) => (
            <div key={i} className=" flex md:flex-1  items-center  gap-3">
              <div className="bg-white border flex-col flex-1 min-h-[120px] py-6 justify-center border-slate-200 px-5  rounded-xl text-[12px] font-bold text-slate-700 shadow-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-[#161D83] flex items-center justify-center text-xs">{i+1}</span>
                {s}
              </div>
              {i < 3 && <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />}
            </div>
          ))}
        </div>

        </div>
        <div className="block md:hidden  ">

          <div className=" grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 mt-12 relative z-10">
  {["Upload resume once", "AI finds your matches", "Apply directly", "Move abroad,sorted"].map((s, i) => (
    <div key={i} className="flex items-center gap-3">
      
      <div className="bg-white border flex flex-col flex-1 min-h-[120px] py-6 justify-center border-slate-200 px-5 rounded-xl text-[12px] font-bold text-slate-700 shadow-sm items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-slate-100 text-[#161D83] flex items-center justify-center text-xs">
          {i + 1}
        </span>
        {s}
      </div>

      {/* Arrow (only desktop) */}
      {i < 3 && (
        <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />
      )}
    </div>
  ))}
</div>
        </div>
      
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "For Students", desc:"Find your dream university abroad", icon: GraduationCap, points: ["AI-matched college shortlisting", "SOP, LOR & Application guidance ", "Visa documentation support","Scholarship & intake alerts"], btn: "Explore Colleges" },
            { title: "For Job Seekers",desc:"Land a career in a new country", icon: Briefcase, points: ["Resume-matched jobs from employers", "Work Visa eligibility check", "interview prep & optimisation","Relocation & setting-in support"], btn: "Explore Jobs" },
            { title: "Accommodation",desc:"Find your home away from home", icon: Home, points: ["100% Verified housing", "Rooms, shared flats & studios", "Filters for budget & distance", "Lease help & move-in-checklist"], btn: "Find A Room" },
          ].map((card, i) => (
            <div key={i} className="bg-white overflow-hidden rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-slate-100 px-6  flex flex-col  gap-2 py-10">
              <div className="w-fit h-fit bg-blue-50 text-[#161D83] rounded-2xl flex items-center justify-center ">
                
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl text-slate-900 ">{card.title}</h3>
              <p className="text-slate-500 text-[16px] font-medium">{card.desc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-1 px-4 pt-6">
                {card.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] font-medium text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#161D83] shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <button className="w-[90%] mx-auto mb-10  hover:bg-slate-50 bg-[#161D83] hover:text-slate-800 text-white border border-slate-200 hover:border-[#161D83] px-6 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2">
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-10">
        <p className="text-[#161D83] font-bold text-center mb-4">Full-stack support</p>
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Everything you need, under one roof</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Smart Matching", icon: SearchIcon ,desc:"AI maps your resume to colleges, jobs & rooms that fit you — no manual searching."},
            { label: "Application Help", icon: FilePen, desc:"SOPs, LORs, cover letters — guided by experts, 0% commission."  },
            { label: "Visa Support", icon: PlaneTakeoff , desc:"Study visa, work visa, or residency — full documentation & process guidance."},
            { label: "Verified Homes", icon: Building2 , desc:"25,000+ verified rooms near universities and workplaces across 8 countries."},
            { label: "Loans & Finances", icon: Banknote , desc:"Education and relocation loans — connected to lenders at 0% broker fee."},
            { label: "Pre-departure Kit", icon: Briefcase , desc:"Forex, SIM cards, travel insurance — all sorted before you board."},
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col  gap-3 group cursor-default">
              <item.icon className="w-8 h-8  text-[#161D83] transition-colors" />
              <span className="font-bold text-lg text-[#0F172A] transition-colors">{item.label}</span>
              <p className="text-[#475569] text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATION */}
      <section className="max-w-4xl mx-auto text-center py-10 md:py-20 px-4">
        <p className="uppercase text-[#161d83] mb-4 font-medium">destinations</p>
        <div className="inline-flex items-center justify-center gap-2 mb-8">
          {/* <MapPin className="w-6 h-6 text-[#161D83]" /> */}
          <h2 className="text-2xl md:text-[30px] font-bold text-slate-900">Where do you want to go?</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {popularSearchData.tabs
            .filter((tab) => popularSearchData.tabFlags[tab])
            .slice(0, 9)
            .map((countryName, i) => {
              const flagCode = popularSearchData.tabFlags[countryName];
              return (
                <Link 
                  key={i} 
                  href={`/properties?country=${encodeURIComponent(countryName)}`}
                  className={`flex items-center gap-2 px-6 py-3 border rounded-full text-[15px] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    i === 0 
                      ? "bg-[#161D83] text-white border-[#161D83]" 
                      : "bg-white text-gray-700 border-slate-200 hover:border-[#161D83] hover:text-[#161D83]"
                  }`}
                >
                  <img 
                    src={`https://flagcdn.com/w40/${flagCode}.png`} 
                    alt={`${countryName} flag`}
                    className="w-5 h-[15px] object-cover rounded-[2px] shadow-sm"
                  />
                  {countryName}
                </Link>
              );
            })}
        </div>

        <button className=" flex gap-2 font-bold items-center mx-auto   text-[#161D83] px-6  mt-6 text-[16px] py-4 tracking-wide hover:border-[#161D83] rounded-full hover:border border border-transparent transition-colors active:scale-95">
       Help me choose a country <ArrowRight className="w-5 h-5 font-bold" />
        </button>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-br from-[#161D83] to-blue-900 text-white text-center py-10 md:py-20 px-6 rounded-[40px] shadow-2xl shadow-blue-900/30 ">

{/* white color ellips overplay 200px   */}

  <div className="absolute -top-20 -right-20 w-[384px] h-[384px] rounded-full bg-[#3B82F6]/30 blur-[100px]"></div>

    {/* <div className="absolute -top-20 -left-20 w-[384px] h-[384px] rounded-full bg-[#3B82F6]/30 blur-[100px]"></div> */}


          {/* <div className="absolute top-10 left-1/2 z-40 w-[200px] h-[200px] bg-white/20 rounded-full pointer-events-none blur-sm -translate-x-1/2 -translate-y-1/2"></div> */}



          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Study. Work. Live abroad — <br className="hidden md:block" />
              <span className="text-blue-300">start with one upload.</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-10">Join thousands of Upload your resume once. We find your colleges, jobs, and home abroad —
completely free, no agents, no commission.</p>
            <button className="bg-white text-[#161D83] hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-[16px] tracking-wide transition-colors shadow-xl flex items-center justify-center gap-2 mx-auto active:scale-95">
              Upload My Resume — It's Free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}