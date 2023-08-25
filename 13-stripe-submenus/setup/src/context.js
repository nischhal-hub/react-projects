import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation]=useState({})
    const [item, setItem] = useState({page:'',links:[]})
    const openSidebar = () => {
        setIsSidebarOpen(true)
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    };
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link)=>link.page===text)
        setItem(page)
        setIsSubmenuOpen(true)
        setLocation(coordinates)
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    };
    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                openSubmenu,
                closeSidebar,
                closeSubmenu,
                location,
                item,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { useGlobalContext, AppProvider }
