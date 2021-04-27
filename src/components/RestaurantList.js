import styled from 'styled-components';
import firebase from '../firebase';
import React, { useEffect, useContext, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import {WineFilterContext} from '../context/WineFilterContext';

const UlStyled = styled.ul`
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    grid-gap: 2rem;
    opacity: 1;
    transition: all 0.3s ease;

    &.hidden {
        opacity: 0;
    }
`

function RestaurantList({className}) {
    const [restaurantData, setRestaurantData] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [wineFilter] = useContext(WineFilterContext);

    useEffect(() => {
        const dbRef = firebase.database().ref();
        
        dbRef.on('value', (data) => {
        const firebaseData = data.val();

        const restaurantList = [];

        for (let restaurantKey in firebaseData) {
            restaurantList.push({
            uniqueKey: restaurantKey,
            name: firebaseData[restaurantKey].name,
            wine: firebaseData[restaurantKey].wine,
            flavours: firebaseData[restaurantKey].flavours,
            foodTypes: firebaseData[restaurantKey].foodTypes,
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

        setRestaurantData(restaurantList);
        setRestaurants(restaurantList);
    })

    }, []) 

    useEffect(() => {
        if(wineFilter ==="wineOnly") {
            const wineFiltered = restaurantData.filter((rest) => {
                return rest.wine === true
            })
            setRestaurants(wineFiltered)
        } else(
            setRestaurants(restaurantData)
        )
    }, [wineFilter, restaurantData])

    return (
        <UlStyled
            className={className}
        >
            {restaurants.map((restaurant) => {
                return (
                <RestaurantCard
                    key={restaurant.uniqueKey}
                    restaurant={restaurant}
                />
                )
            })}

        </UlStyled>
    )
}

export default RestaurantList;