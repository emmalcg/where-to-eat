import styled from 'styled-components';

const FieldsetStyled = styled.fieldset`
    margin-left: auto;
`

const Radio = styled.input`
    opacity: 1; 
    position: fixed;
    width: 0px;
    height: 0px; 


    &:focus + label {
        text-decoration: underline;
        background-color: blue;
    }
    

    &:checked + label {
        background-color: var(--dark-secondary-color);
        outline: 2px solid var(--main-text-color);
        text-decoration: none;
        z-index: 1;
    }
`

const Label = styled.label`
    font-size: 1.6rem;
    outline: 1px solid var(--main-text-color);
    text-align: center;
    background-color: var(--lightened-background);
    transition: background-color 0.3s ease;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    position: relative;
    top: 1.3rem;

    cursor: pointer;
`

function SegmentedButton(props) {
    const {legend, name, firstId, firstChecked, firstLabel, onChange, secondId, secondChecked, secondLabel} = props

    return (
    <FieldsetStyled>
        <div>
            <legend className="sr-only">{legend}</legend>
        </div>

        <Radio 
            type="radio" 
            id={firstId}
            value={firstId}
            name={name}
            checked={firstChecked}
            onChange={onChange}
        />
        <Label htmlFor={firstId}>{firstLabel}</Label>

        <Radio 
            type="radio" 
            id={secondId}
            value={secondId}
            name={name}
            checked={secondChecked}
            onChange={onChange}
        />
        <Label htmlFor={secondId}>{secondLabel}</Label>
    </FieldsetStyled>

    )
}
export default SegmentedButton