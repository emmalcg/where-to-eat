import Dropdown from './Dropdown';
import {useState} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";
import DeleteButton from './DeleteButton';

function FilterComponent() {

    const flavours = [
        'sour',
        'refreshing',
        'savory',
        'spicy',
        'sweet'
    ]
    const types = [
        'snacks',
        'vegetables',
        'soup',
        'BBQ',
        'noodles',
        'burger',
        'pizza',
        'meat',
        'dessert',
        'dumplings',
        'sandwich',
        'seafood'
    ]
    const wines = [
        'show me the wine!',
        'no wine'
    ]

    const [filteredFlavourList, setFilteredFlavourList] = useState([]);
    const [filteredTypeList, setFilteredTypeList] = useState([])

    const [allFiltered, setAllFiltered] = useState([])

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
    
    const handleFilter = () => {

        const filteredFlavours = flavourFilter.filter((flavour) => {
            return flavour.value === true;
        }).map((flavour) => {
            return flavour.name
        })

        const filteredTypes = typeFilter.filter((type) => {
            return type.value === true;
        }).map((type) => {
            return type.name
        })

        const all = filteredFlavours.concat(filteredTypes)
        
        setFilteredFlavourList(filteredFlavours);
        setFilteredTypeList(filteredTypes);

        setAllFiltered(all);

    }

    const deleteItem = (e) => {
        const updatedFiltered = allFiltered.filter((item) => {
            return item !== e.target.value
        })
        setAllFiltered(updatedFiltered)

        

    }
    console.log('state', allFiltered)

    const resetFilter = () => {
        setAllFiltered([]);
        setFlavourFilter(flavours.map(flavour => ({
        "value": false,
        "name" : flavour
        })))
        setTypeFilter((types.map(type => ({
        "value" : false,
        "name" : type
        }))))
    }

    return (
    <div className="filter">
        <div className={`dropdownContainer ${allFiltered.length > 0 && "buttons"}`}>
            <Dropdown 
                title='Flavours'
                onClick={handleFilter}
                buttonText='Apply'
                listItems={
                    <>
                    {flavourFilter.map(flavour => (
                            <li 
                            className="checkboxContainer"
                            key={`${flavour.name}Container`}
                            >
                                <Checkbox
                                    key={`${flavour.name}1`}
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
                        
                        {/* <button onClick={handleFilter}>Apply</button> */}
                    </>
                    }

            />

            <Dropdown 
                title='Types Of Food'
                onClick={handleFilter}
                buttonText='Apply'
                listItems={
                        <>
                        {typeFilter.map(type => (
                                <li 
                                className="checkboxContainer"
                                key={`${type.name}Container`}
                                >
                                    <Checkbox
                                        key={`${type.name}1`}
                                        id={type.name}
                                        name='typeFilter'
                                        checked={type.value}
                                        onChange={handleChoice}
                                        value={type.name}
                                        text={type.name}
                                        htmlFor={type.name}
                                    />
                                </li>
                            ))
                        }
                        {/* <button onClick={handleFilter}>Apply</button> */}
                        </>
                    }
            />
        </div>
        {
            allFiltered.length > 0 &&

            <div className="deleteContainer">
                {
                    allFiltered.map(item => {
                        return (
                            <DeleteButton key={`${item}Button`} item={item} onClick={deleteItem}/>
                        )
                    })
                }
                <button className="clearAll deleteButton" onClick={resetFilter}>Clear All</button>
            </div>
        }

    </div>
    )
} 

export default FilterComponent;