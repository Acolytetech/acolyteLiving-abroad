"use client";
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    useMemo,
} from "react";
import { useAuth } from "../components/context/AuthContext";

const PropertySelectionContext = createContext({
    isFeatureEnabled: false,
    showFullDetails: false,
    setShowFullDetails: () => {},
    selectedProperties: [],
    togglePropertySelection: () => {},
    isSummaryModalOpen: false,
    setIsSummaryModalOpen: () => {},
    summaryModalPropertyOverride: null,
    openPropertySummaryModal: () => {},
});

export const PropertySelectionProvider = ({ children }) => {
    const { user } = useAuth();
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [isSummaryModalOpen, setIsSummaryModalOpenState] = useState(false);
    const [summaryModalPropertyOverride, setSummaryModalPropertyOverride] =
        useState(null);

    const isFeatureEnabled =
        user?.role_id === 4 ||
        String(user?.role?.name || "").toLowerCase() === "salesman";

    const setIsSummaryModalOpen = useCallback((open) => {
        const next = Boolean(open);
        setIsSummaryModalOpenState(next);
        if (!next) setSummaryModalPropertyOverride(null);
    }, []);

    const openPropertySummaryModal = useCallback(
        (items) => {
            if (!isFeatureEnabled) return;
            const list = Array.isArray(items) ? items : items ? [items] : [];
            if (list.length === 0) return;
            setSummaryModalPropertyOverride(list);
            setIsSummaryModalOpenState(true);
        },
        [isFeatureEnabled]
    );

    const togglePropertySelection = useCallback((property) => {
        if (!isFeatureEnabled) return;
        setSelectedProperties((prev) => {
            const exists = prev.find((p) => p.house_id === property.house_id);
            if (exists) {
                return prev.filter((p) => p.house_id !== property.house_id);
            }
            return [...prev, property];
        });
    }, [isFeatureEnabled]);

    useEffect(() => {
        if (isFeatureEnabled) return;

        setShowFullDetails(false);
        setSelectedProperties([]);
        setIsSummaryModalOpenState(false);
        setSummaryModalPropertyOverride(null);
    }, [isFeatureEnabled]);

    const value = useMemo(
        () => ({
            isFeatureEnabled,
            showFullDetails,
            setShowFullDetails,
            selectedProperties,
            togglePropertySelection,
            isSummaryModalOpen,
            setIsSummaryModalOpen,
            summaryModalPropertyOverride,
            openPropertySummaryModal,
        }),
        [
            isFeatureEnabled,
            showFullDetails,
            selectedProperties,
            togglePropertySelection,
            isSummaryModalOpen,
            setIsSummaryModalOpen,
            summaryModalPropertyOverride,
            openPropertySummaryModal,
        ]
    );

    return (
        <PropertySelectionContext.Provider value={value}>
            {children}
        </PropertySelectionContext.Provider>
    );
};

export const usePropertySelection = () => useContext(PropertySelectionContext);
