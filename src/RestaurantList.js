import firebase from './firebase.js';
import React, { useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard.js';
import {RestaurantContext} from './RestaurantContext';
function RestaurantList() {
    const [restaurants, setRestaurants] = useContext(RestaurantContext)
    // const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const dbRef = firebase.database().ref();
        
        dbRef.on('value', (data) => {
        const restaurantData = data.val();

        const restaurantList = [];

        for (let restaurantKey in restaurantData) {
            restaurantList.push({
            uniqueKey: restaurantKey,
            name: restaurantData[restaurantKey].name,
            wine: restaurantData[restaurantKey].wine,
            flavours: restaurantData[restaurantKey].flavours,
            foodTypes: restaurantData[restaurantKey].foodTypes,
            })
        }
        
        const sort = (property) => {
            let sortOrder = 1;

            if(property[0] ==='-') {
            sortOrder = -1;
            property = property.substr(1);
            }

            return function (a,b) {
            if(sortOrder === -1) {
                return b[property].localCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }
            }
        }

        restaurantList.sort(sort("name"));

        setRestaurants(restaurantList);

        })
    }, [])


    return (
        <ul className="restaurantContainer">
            {restaurants.map((restaurant) => {
                return (
                <RestaurantCard
                    key={restaurant.uniqueKey}
                    restaurant={restaurant}
                />
                )
            })}

        </ul>
    )
}

export default RestaurantList;