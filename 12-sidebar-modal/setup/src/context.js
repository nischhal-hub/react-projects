import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openModal,
                openSidebar,
                closeModal,
                closeSidebar
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
