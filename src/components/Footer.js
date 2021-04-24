import styled from 'styled-components'

const Foot = styled.footer`
    margin-top: auto;
    text-align: center;


    a {
        display: block;
        padding: 12px;
        border: 1px solid transparent;
        font-size: 1.6rem;
        line-height: 2rem;
        text-transform: uppercase;
        border-top: 1px solid var(--main-text-color);
        transition: all 0.5s ease-in-out;
    }

    a:hover,
    a:focus {
        font-size: 1.8rem;
        letter-spacing: 1px;
        background: var(--gradient);
    }
`

function Footer() {
    return (
        <footer>
            <a href="#header">to top</a>
        </footer>
    )
}

export default Footer;