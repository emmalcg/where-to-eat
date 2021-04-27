import styled from 'styled-components';
import WineFilter from './WineFilter';

const ButtonContainer = styled.section `
    display: flex;
    flex-direction: column;
`

const AddLink = styled.a`
    text-transform: uppercase;
    font-size: 1.6rem;
    transition: background-color 0.3s ease;
    padding: 0.8rem;
    width: 18rem;
    text-align: center;
    border: 1px solid var(--main-text-color);
    margin-top: 1rem;

    &:hover,
    &:focus {
        background: var(--gradient);
    }
`

function Subheading() {
    return (
        <ButtonContainer>
            <WineFilter />
            <AddLink href="#form">Add a Restaurant</AddLink>
        </ButtonContainer>

    )
}

export default Subheading;