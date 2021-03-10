function RestaurantCard(props) {
    const { restaurantInfo } = props;
    return (
        <ul>
            {
            restaurantInfo.map((restaurant) => {
                return (
                    <li key= {restaurant.uniqueKey}>
                        <h3>{restaurant.name}</h3>
                        <div className="restaurantFlavours">
                            <h4>Flavours</h4>
                            {
                            restaurant.flavours.map((flavour) => {
                                return (
                                    <p
                                    key={flavour}>{flavour}</p>
                                )
                            })
                            }
                        </div>
                        <div className="restaurantFood">
                            <h4>Types of food</h4>
                            {
                            restaurant.foodTypes.map((foodType) => {
                                return (
                                    <p key={foodType}>{foodType}</p>
                                )
                            })
                            }   
                        </div>
                        {
                            restaurant.wine === true &&
                            <div className="wine">
                                <p>Natural wine</p>
                            </div>
                            
                        }
                    </li>
                )
            })
            }
        </ul>
    )
}


export default RestaurantCard; 



{/* <li>
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
        </li> */}