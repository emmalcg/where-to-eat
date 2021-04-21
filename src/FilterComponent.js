import Dropdown from './Dropdown';
import {useState, useEffect, useRef} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";

function FilterComponent({flavours, types, wines}) {

    const [flavourOpen, setFlavourOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [wineOpen, setWineOpen] = useState(false);

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
        <Dropdown 
            title='Flavours'
            // items={flavourFilter}

            listItems={flavourFilter.map(flavour => (
                        <li 
                        className="checkboxContainer"
                        key={`${flavour.name}+Container`}
                        >
                            <Checkbox
                                key={flavour.name + 1}
                                id={flavour.name}
                                name='flavourFilter'
                                checked={flavour.value}
                                onChange={handleChoice}
                                value={flavour.name}
                                text={flavour.name}
                                htmlFor={flavour.name}
                            />
                        </li>
                    ))}
            buttonText='Apply'

        />
        <Dropdown 
            title='Types Of Food'

            listItems={typeFilter.map(type => (
                        <li 
                        className="checkboxContainer"
                        key={`${type.name}+Container`}
                        >
                            <Checkbox
                                key={type.name + 1}
                                id={type.name}
                                name='typeFilter'
                                checked={type.value}
                                onChange={handleChoice}
                                value={type.name}
                                text={type.name}
                                htmlFor={type.name}
                            />
                        </li>
                    ))}
            buttonText='Apply'

        />

    </div>
    )
} 

export default FilterComponent;