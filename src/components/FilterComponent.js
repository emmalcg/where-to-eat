import {FilterContainer, DropdownContainer, CheckboxContainer, DeleteContainer, DeleteButton, RefineHeader, ClearAll, RefineBy, MobileDelete, SubHeading, MobileUl} from './styles/FilterStyles'
import Dropdown from './Dropdown';
import {useState, useContext, useEffect} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";
import {WineFilterContext} from '../context/WineFilterContext';
import SegmentedButton from './SegmentedButton'
import MobileFilter from './MobileFilter';
import {FilterContext} from '../context/FilterContext'

function FilterComponent() {
    const [filter, setFilter] = useContext(FilterContext) // eslint-disable-line

    const [wineFilter, setWineFilter] = useContext(WineFilterContext)

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

    const [flavourFilter, setFlavourFilter] = useState(flavours.map(flavour => ({
        "value": false,
        "name" : flavour
    })))

    const [typeFilter, setTypeFilter] = useState(types.map(type => ({
        "value" : false,
        "name" : type
    })))

    //list to check if there is filtering selected for condition rendering of "refine by"
    const filteredFlavourStrings = flavourFilter.filter(flavour => {
        return flavour.value === true
    }).map(flavour => {
        return flavour.name
    })
    
    const filteredTypeStrings = typeFilter.filter(type => {
        return type.value === true
    }).map(type => {
        return type.name
    })

    const filteredList = filteredFlavourStrings.concat(filteredTypeStrings)

    useEffect(() => {

        setFilter(filteredList)
        
    }, [filteredList.length]) // eslint-disable-line


    //checkbox handling 
    const handleChoice = (e) => {
        const choice = e.target.value;
        const group = e.target.name;
        
        console.log(e.target.value)
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

    // "Clear All" button 
    const resetFilter = () => {
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
    <form >
        <FilterContainer> 
            <MobileFilter 
                listItems={
                    <>
                    {
                    filteredList.length > 0 &&
                    
                    <MobileDelete>
                        <RefineHeader>
                            <RefineBy>Refine By</RefineBy>
                            <ClearAll onClick={resetFilter}>Clear All</ClearAll>
                        </RefineHeader>
                        <ul>
                            {
                                flavourFilter.filter(flavour => {
                                    return flavour.value === true
                                })
                                .map(flavour => {
                                    return (
                                        <DeleteButton
                                            key={`${flavour.name}Delete`}
                                            >
                                                <Checkbox
                                                    key={`${flavour.name}DeleteButton`}
                                                    id={flavour.name}
                                                    name='flavourFilter'
                                                    checked={flavour.value}
                                                    onChange={handleChoice}
                                                    value={flavour.name}
                                                    text={flavour.name}
                                                    htmlFor={flavour.name}
                                                />
                                        </DeleteButton>
                                    )
                                }) 
                            }

                            {
                                typeFilter.filter(type => {
                                    return type.value === true
                                })
                                .map(type => {
                                    return (
                                        <DeleteButton
                                            key={`${type.name}Delete`}
                                            >
                                                <Checkbox
                                                    key={`${type.name}DeleteButton`}
                                                    id={type.name}
                                                    name='typeFilter'
                                                    checked={type.value}
                                                    onChange={handleChoice}
                                                    value={type.name}
                                                    text={type.name}
                                                    htmlFor={type.name}
                                                />
                                        </DeleteButton>
                                    )
                                }) 
                            }
                        </ul>
                    </MobileDelete>
                    }
                        <SubHeading>Flavours</SubHeading>
                            <MobileUl>
                            {flavourFilter.map(flavour => (
                                    <CheckboxContainer
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
                                    </CheckboxContainer>
                                ))}
                            </MobileUl>
                            <SubHeading>Food Types</SubHeading>
                            <MobileUl>
                            {typeFilter.map(type => (
                                    <CheckboxContainer
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
                                    </CheckboxContainer>
                                ))
                            }
                            </MobileUl>
                        </>
                }
            
            
            />
            <DropdownContainer className={filteredList.length > 0 && "buttons"}>
                <Dropdown 
                    title='Flavours'
                    listItems={
                        <>
                        {flavourFilter.map(flavour => (
                                <CheckboxContainer
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
                                </CheckboxContainer>
                            ))}
                        </>
                        }

                />

                <Dropdown 
                    title='Types Of Food'
                    listItems={
                            <>
                            {typeFilter.map(type => (
                                    <CheckboxContainer
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
                                    </CheckboxContainer>
                                ))
                            }
                            </>
                        }
                />
            </DropdownContainer>
            
            <SegmentedButton 
                legend="Filter by wine"
                name="wine"
                firstId="allRest"
                firstChecked={wineFilter === 'allRest'}
                onChange={(e) => { setWineFilter(e.target.value)}}
                firstLabel='All'

                secondId='wineOnly'
                secondChecked={wineFilter === 'wineOnly'}
                secondLabel='Wine'
            
            />

        </FilterContainer>
        
        {
            filteredList.length > 0 &&
            
            <DeleteContainer>
                <RefineBy>Refine By</RefineBy>
                <ul>
                    {
                        flavourFilter.filter(flavour => {
                            return flavour.value === true
                        })
                        .map(flavour => {
                            return (
                                <DeleteButton
                                    key={`${flavour.name}Delete`}
                                    >
                                        <Checkbox
                                            key={`${flavour.name}DeleteButton`}
                                            id={flavour.name}
                                            name='flavourFilter'
                                            checked={flavour.value}
                                            onChange={handleChoice}
                                            value={flavour.name}
                                            text={flavour.name}
                                            htmlFor={flavour.name}
                                        />
                                </DeleteButton>
                            )
                        }) 
                    }

                    {
                        typeFilter.filter(type => {
                            return type.value === true
                        })
                        .map(type => {
                            return (
                                <DeleteButton
                                    key={`${type.name}Delete`}
                                    >
                                        <Checkbox
                                            key={`${type.name}DeleteButton`}
                                            id={type.name}
                                            name='typeFilter'
                                            checked={type.value}
                                            onChange={handleChoice}
                                            value={type.name}
                                            text={type.name}
                                            htmlFor={type.name}
                                        />
                                </DeleteButton>
                            )
                        }) 
                    }
                </ul>
                <ClearAll onClick={resetFilter}>Clear All</ClearAll>
            </DeleteContainer>
        }

    </form>
    )
} 

export default FilterComponent;