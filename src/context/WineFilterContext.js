import React, {useState, createContext} from 'react';

export const WineFilterContext = createContext();

export const WineFilterProvider = ({children}) => {
    const [wineFilter, setWineFilter] = useState("allRest");
    return (
        <WineFilterContext.Provider value={[wineFilter, setWineFilter]}>
            {children}
        </WineFilterContext.Provider>
    );
}
