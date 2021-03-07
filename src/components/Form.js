function Form() {
    return (
            <form id="form" action="submit">
                <legend>add a restaurant</legend>
                <div className="questionContainer">
                    <label htmlFor="restaurantName" className="restaurantName"><p>Restaurant Name</p></label>
                    <input type="text" name="restaurantName" id="restaurantName"/>
                </div>


                <div className="questionContainer">
                    <p>Kind of Flavours</p>

                    <input type="checkbox" id="sour" value="sour" name="flavour"/>
                    <label htmlFor="sour">Sour</label>

                    <input type="checkbox" id="refreshing" value="refreshing" name="flavour"/>
                    <label htmlFor="refreshing">Light</label>

                    <input type="checkbox" id="warm" value="warm" name="flavour"/>
                    <label htmlFor="warm">Warm</label>

                    <input type="checkbox" id="spicy" value="spicy" name="flavour"/>
                    <label htmlFor="spicy">Spicy</label>


                    <input type="checkbox" id="sweet" value="sweet" name="flavour"/>
                    <label htmlFor="sweet">Sweet</label>
                </div>

                

                <div className="questionContainer">
                    <p>Types of Food</p>
                    <input type="checkbox" id="snacks" value="snacks" name="typeOfFood"/>
                    <label htmlFor="snacks">Snacks</label>

                    <input type="checkbox" id="vegetables" value="vegetables" name="typeOfFood"/>
                    <label htmlFor="vegetables">Vegetables</label>

                    <input type="checkbox" id="soup" value="soup" name="typeOfFood"/>
                    <label htmlFor="soup">Soup</label>

                    <input type="checkbox" id="meat" value="meat" name="typeOfFood"/>
                    <label htmlFor="meat">Meat</label>

                    <input type="checkbox" id="taco" value="taco" name="typeOfFood"/>
                    <label htmlFor="taco">Taco</label>

                    <input type="checkbox" id="noodles" value="noodles" name="typeOfFood"/>
                    <label htmlFor="noodles">Noodles</label>

                    <input type="checkbox" id="burger" value="burger" name="typeOfFood"/>
                    <label htmlFor="burger">Burger</label>

                    <input type="checkbox" id="pizza" value="pizza" name="typeOfFood"/>
                    <label htmlFor="pizza">Pizza</label>

                    <input type="checkbox" id="pasta" value="pasta" name="typeOfFood"/>
                    <label htmlFor="pasta">Pasta</label>

                    <input type="checkbox" id="dumplings" value="dumplings" name="typeOfFood"/>
                    <label htmlFor="dumplings">Dumplings</label>

                    <input type="checkbox" id="sandwich" value="sandwich" name="typeOfFood"/>
                    <label htmlFor="sandwich">Sandwich</label>

                    <input type="checkbox" id="seafood" value="seafood" name="typeOfFood"/>
                    <label htmlFor="seafood">Seafood</label>
                </div>

                <div className="questionContainer">
                    <p>Natural Wine</p>
                    <input type="radio" id="yesWine" value="yesWine" name="wine"/>
                    <label htmlFor="yesWine">Yes</label>

                    <input type="radio" id="noWine" value="noWine" name="wine"/>
                    <label htmlFor="noWine">No</label>
                </div>

                <button type="submit">submit</button>
            
            </form>
    )
}

export default Form;