import styled from 'styled-components'

const FilterContainer = styled.div `
    display: flex;
    position: relative;

`

const DropdownContainer = styled.div`
    padding-bottom: 5.9rem;

    &.buttons {
        padding-bottom: 0.8rem;
    }

    @media (max-width: 740px) {
        &.buttons {
        padding-bottom: 5.9rem;
    }
    }
`

const CheckboxContainer = styled.li`
    margin: 0.5rem 1.5rem 4rem 1.5rem;

    label {
        font-size: 1.8rem;
        padding: 0.2rem;
        text-transform: uppercase;
    }
`;

const DeleteContainer = styled.div`
    padding: 2.5rem 0 0 0;
    display: flex;
    
    ul {
        padding: 0;
        display: flex;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 740px) {
        display: none;
    }
`

const ClearAll = styled.button`
    color: var(--main-text-color);
    background: transparent;
    border: none;
    outline: 1px solid transparent;
    font-size: 1.6rem;
    margin: 0 0 0 2rem;
    padding: 0;
    transition: all 0.5s ease;

    min-width: 9rem;
    max-height: 2rem;


    &:hover {
        color: var(--bright-contrast)
    }

    &:focus {
        color: var(--bright-contrast)
    }
`

const RefineBy = styled.p`
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 800;
    margin-right: 2rem;
    min-width: 8rem;

`

const DeleteButton = styled.li`
    margin-bottom: 1rem;

    input[type="checkbox"] {
        opacity: 1; 
        position: fixed;
        width: 0px;
        height: 0px; 
    }

    label {
        margin: 0 1rem;
        padding: 0 2.2rem 0 0;
        font-size: 1.6rem;
        outline: 1px solid transparent;
        transition: all 0.5s ease;
        cursor: pointer;
        position: relative;
    }

    label::before,
    label::after {
        content:'';
        position: absolute;
        width: 15px;
        height: 1.5px;
        background-color:var(--main-text-color);
        border-radius: 2px;
        top: 0.9rem;
        right: 0;
        transition: all 0.5s ease;
    }

    label::before{
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    label::after{
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    label:hover::before,
    label:hover::after{
        background-color: var(--bright-contrast);
    }

    label:hover {
        color: var(--bright-contrast);
    }

    input[type="checkbox"]:focus + label {
        outline: 1px solid var(--bright-contrast);
    }


`

//Mobile Menu Styles

const RefineHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const MobileDelete = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;

    li {
        margin-top: 1rem;
    }
`
const SubHeading = styled.h3`
    font-size: 1.6rem;
    font-weight: 800;
    margin: 3rem 0 1.5rem;
    text-transform: uppercase;
`

const MobileUl = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li label {
        text-transform: none;
    }

    li {
        margin: 1.2rem;
        width: 30%;
    };
`


export {FilterContainer, DropdownContainer, CheckboxContainer, DeleteContainer, DeleteButton, ClearAll, RefineHeader, RefineBy, MobileDelete, SubHeading, MobileUl} 