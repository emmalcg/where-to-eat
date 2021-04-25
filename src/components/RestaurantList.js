import styled from 'styled-components';
import firebase from '../firebase';
import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import {RestaurantContext} from '../context/RestaurantContext';
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