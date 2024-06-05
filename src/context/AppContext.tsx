// "use client"

// import { DocumentData } from "firebase/firestore";
// import React, { ReactNode, createContext, useContext, useState } from "react";

// type AppProviderProps = {
//     children: ReactNode;
// }

// type Project = {
//     name: string,
//     language: string,
//     text: string,
// };

// type AppContextType = {
//     selectedProject: string | "";
//     setSelectedProject: React.Dispatch<React.SetStateAction<string | "">>;
// };

// const defaultContextData = {
//     selectedProject: "",
//     setSelectedProject: () => {},
// };

// const AppContext = createContext<AppContextType>(defaultContextData);

// export function AppProvider({ children }: AppProviderProps) {
//     const [selectedProject, setSelectedProject] = useState<string | "">("");

//     return (
//         <AppContext.Provider
//             value={{ selectedProject, setSelectedProject, }}
//         >
//             {children}
//         </AppContext.Provider>
//     );
// };

// export function useAppContext() {
//     return useContext(AppContext);
// };