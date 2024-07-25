import { createContext, useState } from "react";

export const themecontext= createContext()

//provider
export function ThemeContextProviderFunction({children}){
    const[theme,setheme]=useState("light")
    const themeupdaterfunction=()=>{
        setheme(theme=="light"?"dark":"light")
    }
    return(
        <themecontext.Provider value={{theme,themeupdaterfunction}}>{children}</themecontext.Provider>
)
}