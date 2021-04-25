import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

const MobileMenu = styled.button`
    display: none;
    position: absolute;
    top: 0.8rem;
    outline: 1px solid var(--main-text-color);
    border: none;
    padding: 0.5rem 1.3rem 0.3rem;
    background-color: var(--lightened-background);
    transition: background-color 0.3s ease;
    color: var(--main-text-color);
    font-size: 1.8rem;
    z-index: 4;

    &:hover,
    &:focus {
        background: var(--dark-secondary-color)
    }

    @media (max-width: 740px) {
        display: block;
    }
`
const MenuOpen = styled.div `
    position: absolute;
    top: 5rem;
    width: 100%;
    height: 90vh;
    background-color: var(--lightened-background);
    border-top: 1px solid var(--main-text-color);
    z-index: 3;
    padding: 1rem;
`
const slider = <FontAwesomeIcon icon={faSlidersH} />

function MobileFilter ({title, listItems}) {
    const [open, setOpen] = useState(false)

    const openFilterMenu = (e) => {
        e.preventDefault()
        setOpen(!open);
    }

    return (
        <>
        <MobileMenu onClick={openFilterMenu}>
            {slider}
        </MobileMenu>

        {open && (
            <MenuOpen>  
                {listItems}
            </MenuOpen>
        )}
        </>
    )
}

export default MobileFilter