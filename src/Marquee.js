import {useState} from 'react';
import Pointy from './Pointy.js';

function Marquee(props) {
    const [isActive, setIsActive] = useState(true)

    const handleMouseEnter = (e) => {
        setIsActive(false);
    }
    
    const handleMouseLeave = (e) => {
        setIsActive(true);
    }

    return (
        <div className="marqueeContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="marquee" aria-hidden="true">
                <h2 className={isActive 
                ? 'marquee-content'
                : 'marquee-content inactive'}>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    <span>{props.text}</span>
                    <Pointy className="smallIcon"/>
                    </h2>
            </div>
        </div>
    )
}

export default Marquee;