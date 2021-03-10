import {useState} from 'react';

function Marquee(props) {
    const [isActive, setIsActive] = useState(true)

    const handleMouseEnter = (e) => {
        console.log('entered')

        setIsActive(false);
    }
    
    const handleMouseLeave = (e) => {
        console.log('left')
        setIsActive(true);
    }

    return (
        <div className="marqueeContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="marquee" aria-hidden="true">
                <h2 className={isActive 
                ? 'marquee-content'
                : 'marquee-content inactive'}>
                    <span>{props.text}</span>
                    <span>{props.text}</span>
                    <span>{props.text}</span>
                    <span>{props.text}</span>
                    <span>{props.text}</span>
                    <span>{props.text}</span>
                    </h2>
            </div>
        </div>
    )
}

export default Marquee;