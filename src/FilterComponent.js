// import Select from 'react-select'
import {useState, useEffect} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";

function FilterComponent({flavours, types, wines}) {

    const [flavourOpen, setFlavourOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [wineOpen, setWineOpen] = useState(false);


    useOnClickOutside(typeOpen, () => setTypeOpen(false));
    useOnClickOutside(flavourOpen, () => setFlavourOpen(false));


    function useOnClickOutside(isOpen, handler) {
        useEffect (
            () => {
                const listener = (e) => {
                    if (!isOpen || e.target.classList.contains('filterButton')) {
                        return
                    }
                    handler(e);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [isOpen, handler]
        )
    }

    const [flavourFilter, setFlavourFilter] = useState(flavours.map(flavour => ({
        "value": false,
        "name" : flavour
    })))

    const [typeFilter, setTypeFilter] = useState(types.map(type => ({
        "value" : false,
        "name" : type
    })))

    const [wineFilter, setWineFilter] = useState(wines.map(wine => ({
        "value" : false,
        "name" : wine
    })))


    const handleChoice = (e) => {
        const choice = e.target.value;
        
        const group = e.target.name;
        
        if (group === 'flavourFilter') {

            const checkedFlavourFilter = _.cloneDeep(flavourFilter);
            
            let index = 0;
            for (let i = 0; i < checkedFlavourFilter.length; i++) {
                if (checkedFlavourFilter[i].name === choice) {
                    index = i;
                }
            }
            checkedFlavourFilter[index].value = !checkedFlavourFilter[index].value;
            setFlavourFilter(checkedFlavourFilter);
        } 

        if (group === 'typeFilter') {
            const checkedTypeFilter = _.cloneDeep(typeFilter);
            let index = 0;
            for (let i = 0; i < checkedTypeFilter.length; i++) {
                if (checkedTypeFilter[i].name === choice) {
                    index = i;
                }
            }
            checkedTypeFilter[index].value = !checkedTypeFilter[index].value;

            setTypeFilter(checkedTypeFilter);
        } 
    }
    

    return (
    <div className="filter">

        <button onClick={() => {setFlavourOpen(!flavourOpen)}} className={`filterButton ${flavourOpen ? "open" : null}`}>
            Flavours
            <div className={`arrow ${flavourOpen ? "open" : null}`}></div>
            </button>

        {
            flavourOpen === true 
            ? <div className="options">
                { flavourFilter.map((flavour) => {
                    return (
                        <div key={`${flavour.name}Container`} className="checkboxContainer">
                            <Checkbox
                                key={flavour.name + 1}
                                id={flavour.name}
                                name={'flavourFilter'}
                                checked={flavour.value}
                                onChange={handleChoice}
                                value={flavour.name}
                                text={flavour.name}
                                htmlFor={flavour.name}
                            />
                        </div>
                    )
                })
                }
                <button onClick={() => {setFlavourOpen(!setFlavourOpen)}}>Apply</button>
            </div> 
            : null
        }
        
        <button onClick={() => {setTypeOpen(!typeOpen)}} className={`filterButton ${typeOpen ? "open" : null}`}>
            Food Types
            <div className={`arrow ${typeOpen ? "open" : null}`}></div>
            </button>
        {
            typeOpen === true 
            ? <div className="options">
                { typeFilter.map((type) => {
                    return (
                        <div key={`${type.name}Container`} className="checkboxContainer">
                            <Checkbox
                                key={type.name + 1}
                                id={type.name}
                                name={'typeFilter'}
                                checked={type.value}
                                onChange={handleChoice}
                                value={type.name}
                                text={type.name}
                                htmlFor={type.name}
                            />
                        </div>
                    )
                })
                }
                <button onClick={() => {setTypeOpen(!typeOpen)}}>Apply</button>
            </div>
            : null
        }
        

        <button onClick={() => {setWineOpen(!wineOpen)}} className="filterButton">Natural Wine?</button>

    </div>
    
    )
} 

export default FilterComponent;