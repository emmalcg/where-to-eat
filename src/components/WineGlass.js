import React from 'react';
import styled from 'styled-components';

const PathStyled = styled.path`
            stroke: var(--main-text-color);
            stroke-width: 0.1rem;
            stroke-linecap: round;
            fill: var(--lightened-background);
    `

function WineGlass(props) {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.69 78.29">
            <PathStyled d="M7.65,12c13.71,2.86,23,1,34.34-3.4,2.26,7.85,4,13,2.61,21S37,45.51,29,45.79c.36,8.15,1.28,19.37,1.63,27.51.09,2.06-.23,5.38,1.77,5.73,8.47,1.52,10.15,1.28,16.08,7.55-14.11,0-21.38-.28-35.48-.27.71-5.36,7.61-6,15.13-7.68L24.94,46C12.53,40,5.18,24.81,7.65,12Z" transform="translate(-7.05 -8.44)"></PathStyled>
        </svg>
    );
}

export default WineGlass;

