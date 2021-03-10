import Marquee from "./Marquee.js"

function Header() {
    return(
        <header>
            <Marquee text="Favourite places in Toronto" />
            <h1>where to eat</h1>
            <div className="linkContainer">
                <a href="#form">add a restaurant</a>
            </div>
        </header>
    )
}

export default Header;