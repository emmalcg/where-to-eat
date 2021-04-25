import styled from 'styled-components';
import {useState, useRef} from 'react';
import { useEffect } from 'react/cjs/react.development';

const DropdownWrapper = styled.div`
    display: inline-block;
    margin: 0.5rem 5rem 0rem 0rem;
`;

const FilterButton = styled.button`
    position: relative;
    width: 22rem;
    height: 3.5rem;

    padding: 0.25rem 0.5rem;
    border: 1px solid var(--main-text-color);
    outline: none;
    background-color: var(--dark-secondary-color);

    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    color: var(--main-text-color);
    text-transform: uppercase;
    font-style: normal;
    font-size: 1.8rem;
    text-align: left;

    &:focus,
    &:hover {
        border: 2px solid var(--bright-contrast);
        background-color: var(--light-secondary-color)
    }

    &.open {
        z-index: 2;
        border-bottom: 1px solid transparent;
        background-color: var(--light-secondary-color);
    }

    &.open:focus,
    &.open:hover {
        border-bottom: 2px solid transparent;
    }

    @media (max-width: 740px) {
        display: none;
    }

`;
const Arrow = styled.div`
    width: 0; 
    height: 0; 
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    border-left: 0.7rem solid transparent;
    border-right: 0.7rem solid transparent;
    
    border-top: 1rem solid var(--main-text-color);

    &.open {
        border-top: 0;
        border-bottom: 1rem solid var(--main-text-color);
    }
`;

const DropdownList = styled.ul`
    background-color: var(--light-secondary-color);
    padding: 2rem;
    position: absolute;
    top: 3.9rem;

    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--main-text-color);
    z-index: 1;
`;

const CloseButton = styled.button`
    font-size: 1.6rem;
    padding: 0.5rem 0;
    text-transform: uppercase;
    color: var(--main-text-color);
    width: 8rem;
    border-radius: 0;
    border: 1px solid var(--main-text-color);
    background-color: var(--lightened-background);

    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;

    &:hover,
    &:focus {
        background-color: var(--dark-secondary-color);
    }

`

function Dropdown ({title, listItems}) {
    const [open, setOpen] = useState(false);
    const toggle = (e) => {
        e.preventDefault()
        setOpen(!open);
    }
    

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target) ) {
            setOpen(false)
        } 
    }

    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        };
    }, []);

    return (
        <DropdownWrapper ref={ref}>
            <FilterButton
                className={open && "open"}
                onClick={toggle}
            >
                <p>{title}</p>
                <Arrow className={open && "open"}></Arrow>
            </FilterButton>
            {open && (
                <DropdownList>
                    {listItems=listItems}

                    <CloseButton onClick={toggle}>Close</CloseButton>
                </DropdownList>
            )}
        </DropdownWrapper>
    )
}


export default Dropdown;