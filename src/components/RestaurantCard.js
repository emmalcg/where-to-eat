

function RestaurantCard(props) {
    return (
        <li>
            <h3>{props.name}</h3>
            <div className="restaurantFlavours">
                <h4>Flavours</h4>
                {props.flavours}
            </div>
            <div className="restaurantFood">
                <h4>Types of food</h4>
                {props.foodType}
            </div> 
            <div className="wine">
                <p>{props.wine}</p>
            </div>
        </li>
    )
}

export default RestaurantCard; 

