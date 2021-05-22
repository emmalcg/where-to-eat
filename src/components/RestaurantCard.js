import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: var(--lightened-background);
    text-transform: uppercase;
    border: solid 1px var(--main-text-color);


    h3 {
        font-size: 2.7rem;
        margin: 15px auto;
        font-style: italic;
        text-align: center;
        letter-spacing: 1px;
    }

    .restaurantFlavours {
        min-height: 125px;
    }

    h4 {
        font-size: 1.9rem;
        font-style: italic;
        margin: 10px 0 5px 0;
        padding-left: 10px;
        border-bottom: 1px solid var(--main-text-color);
    }


    ul {
        display: flex;
        padding: 5px;
        flex-wrap: wrap;
    }

    li.tag {
        margin: 5px;
        padding: 5px;
        display: block;
        font-size: 1.7rem;
        border: 1px solid var(--main-text-color);
        background-color: var(--light-secondary-color);
    }

    .wine {
        margin-top: auto;
    }

    div.wine p {
        margin: 20px 0 0 0;
        padding: 10px;
        border: none;
        border-top: 1px solid var(--main-text-color);
        background-color: var(--dark-secondary-color);
        font-size: 1.9rem;
        font-weight: 800;
        text-align: center;
        font-style: italic;
    }
`;


function RestaurantCard({restaurant}) {
    
    const ref = useRef(null);
    
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '300px',
        threshold: 1,
    })
    
    const fadeIn = element => {
        gsap.to(ref.current, {
            opacity: 1,
            ease: 'sine',
            duration: 1,
        })
    }

    const fadeOut = element => {
        gsap.from(ref.current, {
            opacity: 0,
            ease: 'sine',
            duration: 1,
        })
    }

    useEffect (() => {
        intersection && intersection.intersectionRatio < 1
        ? fadeOut()
        : fadeIn()

    }, [intersection] );

    return (
        <StyledCard ref={ref}>
            <h3>{restaurant.name}</h3>
            <div className="restaurantFlavours">
                <h4>Flavours</h4>
                <ul>
                    {
                    restaurant.flavours.map((flavour) => {
                        return (
                            <li className="tag"
                            key={flavour}>{flavour}</li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className="restaurantFood">
                <h4>Types of food</h4>
                <ul>
                    {
                    restaurant.foodTypes.map((foodType) => {
                        return (
                            <li className="tag" key={foodType}>{foodType}</li>
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
        </StyledCard>
    )
}

export default RestaurantCard; 

