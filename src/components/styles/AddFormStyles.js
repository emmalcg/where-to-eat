import styled from 'styled-components'

const AddRestaurantForm = styled.form `
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 100%;
    max-width: 820px;

    .formTitle,
    button {
        font-size: 2.5rem;
        text-transform: uppercase;
        outline: 1px solid var(--main-text-color);
        background-color: var(--lightened-background);
        padding: 10px;
        text-align: center;
        font-style: italic;
    }

    .formTitle {
        padding: 20px 15px;
    }

    .questionContainer {
        display: flex;
    }

    label.restaurantName,
    .questionContainer div {
        width: calc((100% / 7) * 2);
        padding: 20px 15px;
        text-transform: uppercase;
        font-style: italic;
        font-size: 2rem;
        text-align: left;
        outline: 1px solid var(--main-text-color);
        background-color: var(--lightened-background);

    }

    input[type="text"] {
        width: calc((100% / 7) * 5);
        padding: 15px;
        border: none;
        outline: 1px solid var(--main-text-color);
        font-size: 2rem;
        color: var(--main-text-color);
        background-color: var(--lightened-background);
        z-index: 1;
        transition: all 0.7s ease;
    }

    input[type="text"]::placeholder {
        opacity: 0;
        text-transform: uppercase;
        font-style: italic;
    }

    input[type="text"]:focus,
    input[type="text"]:hover {
        background-color: transparent;
        outline: 4px solid var(--dark-secondary-color);
    }

    input[type="radio"],
    input[type="checkbox"] {
        opacity: 1; 
        position: fixed;
        width: 0px;
        height: 0px; 
    }

    label {
        width: calc(100% / 7);
        min-width: 85px;
        min-height: 60px;
        font-size: 1.6rem;
        padding: 10px 5px 30px 5px;
        outline: 1px solid var(--main-text-color);
        text-align: center;
        background-color: var(--lightened-background);
        transition: all 0.8s ease;
    }

    fieldset label {
        cursor: pointer;
    }

    .questionContainer {
        flex-wrap: wrap;
    }

    input[type="radio"]:checked + label,
    input[type="radio"]:hover + label,
    input[type="checkbox"]:checked + label,
    input[type="checkbox"]:hover + label {
        background-color: var(--dark-secondary-color);
    }

    input[type="checkbox"]:focus + label,
    input[type="radio"]:focus + label {
        text-decoration: underline;
    }

    button {
        width: 25%;
        min-width: 150px;
        margin: 20px auto;
        font-size: 2rem;
        border: none;
        outline: 1px solid var(--main-text-color);
        color:var(--main-text-color);
        transition: all 1s ease;
    }

    button:hover,
    button:focus {
        background: var(--gradient);
    }

    
    @media (max-width: 840px) {
        label.restaurantName,
        input[type="text"]::placeholder,
        .questionContainer legend {
        font-size: 1.7rem;
    } 

        button {
            width: 38%;
        }    
    }


    @media (max-width: 730px) {
        legend {
            background-color: var(--light-secondary-color);
        }

        .formTitle,
        .questionContainer div {
            font-size: 2rem;
            width: 100%;
            background-color:var(--light-secondary-color);
        }

        label.restaurantName {
            position:absolute;
            left:-10000px;
            top:auto;
            width:1px;
            height:1px;
            overflow:hidden;
        }

        input[type="text"] {
            width: 100%;
        }
        
        input[type="text"]::placeholder {
            color: var(--main-text-color);
            opacity: 1;
        }

        .questionContainer div {
            width: 100%;
        }

        .kindsOfFlavours label,
        .typesOfFood label{
            width: calc(100% / 3);
        }
        .wineQuestion div {
            width: 100%;
        }
        .wineQuestion label {
            width: calc(100% / 2);
        }

        button {
            width: 50%;
        }
    }
`;

export { AddRestaurantForm }