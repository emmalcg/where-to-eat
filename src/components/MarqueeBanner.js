import styled from 'styled-components';
import {useState} from 'react';
import WineGlass from './WineGlass';

const MarqueeDiv = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 60px;
    padding-top: 0.4rem;
    overflow: hidden;
    background: var(--gradient); 
    border-bottom: 1px solid var(--main-text-color);

    .smallIcon {
        width: 50px;
        height: 50px;
    }

    .marquee {
        position: absolute;
        white-space: nowrap;
        height: 50px;
        overflow: hidden;
    }

    .marquee-content {
        animation-duration: 40s;
        animation-name: marquee;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        overflow: hidden;
        display: flex;
    }

    .marquee-content span {
        margin: 15px 40px;
        display: block;
    }

    .marquee-content.inactive {
        animation-play-state: paused;
    }

    @keyframes marquee {
        from {
        transform: translateX(-100%)
        }

        to {
        transform: translateX(15%)
        }


    @media (prefers-reduced-motion: reduce), (update: slow) {
    * {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
    }
}
`;

function MarqueeBanner(props) {
    const [isActive, setIsActive] = useState(true)

    const handleMouseEnter = (e) => {
        setIsActive(false);
    }
    
    const handleMouseLeave = (e) => {
        setIsActive(true);
    }

    return (
        <MarqueeDiv className="marqueeContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="marquee" aria-hidden="true">
                <h2 className={isActive 
                ? 'marquee-content'
                : 'marquee-content inactive'}>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                    <span>{props.text}</span>
                    <WineGlass className="smallIcon"/>
                </h2>
            </div>
        </MarqueeDiv>
    )
}

export default MarqueeBanner;