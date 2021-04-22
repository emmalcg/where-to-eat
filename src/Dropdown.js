import {useState, useRef} from 'react';
import { useEffect } from 'react/cjs/react.development';


function Dropdown ({title, listItems, buttonText, onClick}) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
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
        <div ref={ref} className="dd-wrapper">
            <button
                className={`filterButton ${open && "open"}`}
                onClick={toggle}
            >
                <p>{title}</p>
                <div className={`arrow ${open && "open"}`}></div>
            </button>
            {open && (
                <ul className="dd-options">
                    {listItems=listItems}

                    <button onClick={onClick}>{buttonText}</button>
                </ul>
            )}

            
        </div>
    )
}


export default Dropdown;