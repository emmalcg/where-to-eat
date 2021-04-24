import styled from 'styled-components';
import firebase from '../firebase';
import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import {RestaurantContext} from '../context/RestaurantContext';
import {FilterContext} from '../context/FilterContext';

const UlStyles = styled.ul`
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    grid-gap: 2rem;
`

function RestaurantList() {
    const [restaurantData, setRestaurantData] = useState([])
    const [restaurants, setRestaurants] = useContext(RestaurantContext)
    const [filter] = useContext(FilterContext);

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

        setRestaurantData(restaurantList)

        setRestaurants(restaurantList);

        })
    }, [])

    // useEffect(() => {

    //     if(filter.length > 0) {
    
    //         const filteredRest = restaurants.filter(rest => {
    //             for(let i = 0; i < filter.length; i++) {
    //                 if (rest.flavours.includes(filter[i]) || rest.foodTypes.includes(filter[i])) {
    //                     return rest
    //                 }
    //             }
    //         })        
    //         console.log(filteredRest)
    //         setRestaurants(filteredRest)

            

    //     } else {
    //         setRestaurants(restaurantData)
    //     }

    // },[filter.length])

    return (
        <UlStyles>
            {restaurants.map((restaurant) => {
                return (
                <RestaurantCard
                    key={restaurant.uniqueKey}
                    restaurant={restaurant}
                />
                )
            })}

        </UlStyles>
    )
}

export default RestaurantList;