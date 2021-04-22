function RestaurantCard({restaurant}) {

    return (
        <li className="restaurantItem">
            <h3>{restaurant.name}</h3>
            <div className="restaurantFlavours">
                <h4>Flavours</h4>
                <ul className="tagList">
                    {
                    restaurant.flavours.map((flavour) => {
                        return (
                            <li
                            key={flavour}>{flavour}</li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className="restaurantFood">
                <h4>Types of food</h4>
                <ul className="tagList">
                    {
                    restaurant.foodTypes.map((foodType) => {
                        return (
                            <li key={foodType}>{foodType}</li>
                        )
                    })
                    }
                </ul>   
            </div>
            {
                restaurant.wine && 
                <div className="wine">
                    <p>Natural wine</p>
                </div>
            
            }
        </li>
    )
}

export default RestaurantCard; 

