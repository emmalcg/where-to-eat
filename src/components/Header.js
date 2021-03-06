import styled from 'styled-components';
import MarqueeBanner from './MarqueeBanner';
const Heading = styled.header`
    text-align: center;

    h1 {
        margin: 4rem auto;
        font-size: calc(2rem + 7vw);
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-style: italic;
        text-transform: uppercase;
        color: var(--lightened-background);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--main-text-color);
        text-shadow: 0px 0px 1rem var(--bright-contrast);
    }

    @media(max-width: 550px) {
        a {
            font-size: 1.9rem;
        }
    }
`;



function Header() {
    return(
        <Heading id ="header">
            <MarqueeBanner text="Favourite places in Toronto" />
            <h1>where to eat</h1>
        </Heading>
    )
}

export default Header;