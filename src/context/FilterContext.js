import React, {useState, createContext} from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState([]);
    
    return (
        <FilterContext.Provider value={[filter, setFilter]}>
            {children}
        </FilterContext.Provider>
    );
}
