import { NavigationPanelContext } from "@/contexts/navigation-panel-context";
import { useContext } from "react";

export function useNavigationPanelContext() {
    const context = useContext(NavigationPanelContext)
    
    if (!context) {
        throw new Error("useNavigationPanelContext must be used within NavigationPanelContextProvider.")
    }

    return context
}