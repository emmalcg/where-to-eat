import { useContext } from 'react';
import styled from 'styled-components';
import {WineFilterContext} from '../context/WineFilterContext';

const FieldsetStyled = styled.fieldset`
    margin-left: auto;
`

const Radio = styled.input`
    opacity: 1; 
    position: fixed;
    width: 0px;
    height: 0px; 
    z-index: 1;


    &:focus + label {
        text-decoration: underline;
        background-color #DCFFFA
    }
    

    &:checked + label {
        background-color: var(--dark-secondary-color);
        outline: 2px solid var(--main-text-color);
        text-decoration: none;
        z-index: 1;
    }
`

const Label = styled.label`
    outline: 1px solid var(--main-text-color);
    font-size: 1.6rem;
    text-align: center;
    background-color: var(--lightened-background);
    transition: background-color 0.3s ease;
    padding: 0.5rem 1rem;
    position: relative;
    text-transform: uppercase;

    cursor: pointer;
`

function WineFilter() {
    const [wineFilter, setWineFilter] = useContext(WineFilterContext)

    return (
    <FieldsetStyled>
        <div>
            <legend className="sr-only">Filter by Wine</legend>
        </div>

        <Radio 
            type="radio" 
            id="allRest"
            value="allRest"
            name='wineFilter'
            checked={wineFilter === "allRest"}
            onChange={(e) => { setWineFilter(e.target.value)}}
        />
        <Label htmlFor="allRest">All</Label>

        <Radio 
            type="radio" 
            id="wineOnly"
            value="wineOnly"
            name='wineFilter'
            checked={wineFilter === "wineOnly"}
            onChange={(e) => { setWineFilter(e.target.value)}}
        />
        <Label htmlFor="wineOnly">Wine</Label>
    </FieldsetStyled>

    )
}
export default WineFilter;