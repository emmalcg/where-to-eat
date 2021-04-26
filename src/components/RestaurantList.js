import styled from 'styled-components';
import firebase from '../firebase';
import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import {RestaurantContext} from '../context/RestaurantContext';
import {WineFilterContext} from '../context/WineFilterContext';
import {FilterContext} from '../context/FilterContext';


const DivContainer = styled.div`
    position: relative
`
const UlStyles = styled.ul`
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    grid-gap: 2rem;
`
const AddLink = styled.a`
    text-transform: uppercase;
    font-size: 1.6rem;
    position: absolute;
    right: 0;
    top: -3.5rem;
    background-color:var(--lightened-background);
    transition: background-color 0.3s ease;
    padding: 0.5rem;
    border: 1px solid var(--main-text-color);

    &:hover,
    &:focus {
        background-color #DCFFFA
    }
`

function RestaurantList() {
    const [restaurantData, setRestaurantData] = useState([])
    const [restaurants, setRestaurants] = useContext(RestaurantContext)
    const [wineFilter] =useContext(WineFilterContext)
    const [filter] = useContext(FilterContext);





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

        setRestaurantData(restaurantList)

        setRestaurants(restaurantList);
    })


    }, [])

    useEffect(() => {

        if (filter.length > 0 && wineFilter === 'allRest') {
            const filteredRest = restaurantData.filter(rest => {
                let matchesFilter = false
                for(let i = 0; i < filter.length; i++) {
                    if (rest.flavours.includes(filter[i]) || rest.foodTypes.includes(filter[i])) {
                    matchesFilter = true
                    }
                }
                return matchesFilter
            })

            setRestaurants(filteredRest)
            
        } if(filter.length > 0 && wineFilter === 'wineOnly') {

            console.log('filter', filter);

            const filteredRest = restaurantData.filter(rest => {
                let matchesFilter = false
                for(let i = 0; i < filter.length; i++) {
                    if (rest.flavours.includes(filter[i]) || rest.foodTypes.includes(filter[i])) {
                    matchesFilter = true
                    }
                }
                return matchesFilter
            }).filter(rest => {
                if (rest.wine === true) {
                    return rest
                }
            })

            setRestaurants(filteredRest)

        } if (filter.length === 0 && wineFilter === 'wineOnly') {
            const filteredRest = restaurantData.filter(rest => {
                if(rest.wine === true) {
                    return rest
                }
            })
            setRestaurants(filteredRest)

        } else if (filter.length === 0 && wineFilter === 'allRest') {
            setRestaurants(restaurantData)
        }

        console.log(restaurants);

    },[filter.length, wineFilter])



    return (
        <DivContainer>
            <AddLink href="#form">Add a Restaurant</AddLink>
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
        </DivContainer>
    )
}

export default RestaurantList;