function Form() {
    return (
            <form id="form" action="submit">
                <legend><h3>add a restaurant to the list</h3></legend>
                <div className="questionContainer">
                    <label htmlFor="restaurantName"><p>restaurant</p></label>
                    <input type="text" name="restaurantName" id="restaurantName"/>
                </div>
                <div className="questionContainer">
                    <p>natural wine?</p>
                    <label htmlFor="yesWine">Yes</label>
                    <input type="radio" id="yesWine" value="yesWine" name="wine"/>

                    <label htmlFor="noWine">No</label>
                    <input type="radio" id="noWine" value="noWine" name="wine"/>
                </div>


                <div className="questionContainer">
                    <p>what kind of flavors?</p>
                    <label htmlFor="sour">Sour</label>
                    <input type="checkbox" id="sour" value="sour" name="flavour"/>

                    <label htmlFor="refreshing">Light</label>
                    <input type="checkbox" id="refreshing" value="refreshing" name="flavour"/>

                    <label htmlFor="warm">Warm</label>
                    <input type="checkbox" id="warm" value="warm" name="flavour"/>

                    <label htmlFor="spicy">Spicy</label>
                    <input type="checkbox" id="spicy" value="spicy" name="flavour"/>

                    <label htmlFor="sweet">Sweet</label>
                    <input type="checkbox" id="sweet" value="sweet" name="flavour"/>
                </div>

                

                <div className="questionContainer">
                    <p>what type of food?</p>
                    <label htmlFor="snacks">Snacks</label>
                    <input type="checkbox" id="snacks" value="snacks" name="typeOfFood"/>

                    <label htmlFor="vegetables">Vegetables</label>
                    <input type="checkbox" id="vegetables" value="vegetables" name="typeOfFood"/>

                    <label htmlFor="soup">Soup</label>
                    <input type="checkbox" id="soup" value="soup" name="typeOfFood"/>

                    <label htmlFor="meat">Meat</label>
                    <input type="checkbox" id="meat" value="meat" name="typeOfFood"/>

                    <label htmlFor="noodles">Noodles</label>
                    <input type="checkbox" id="noodles" value="noodles" name="typeOfFood"/>

                    <label htmlFor="burger">Burger</label>
                    <input type="checkbox" id="burger" value="burger" name="typeOfFood"/>

                    <label htmlFor="pizza">Pizza</label>
                    <input type="checkbox" id="pizza" value="pizza" name="typeOfFood"/>

                    <label htmlFor="pasta">Pasta</label>
                    <input type="checkbox" id="pasta" value="pasta" name="typeOfFood"/>

                    <label htmlFor="dumplings">Dumplings</label>
                    <input type="checkbox" id="dumplings" value="dumplings" name="typeOfFood"/>

                    <label htmlFor="sandwich">Sandwich</label>
                    <input type="checkbox" id="sandwich" value="sandwich" name="typeOfFood"/>

                    <label htmlFor="seafood">Seafood</label>
                    <input type="checkbox" id="seafood" value="seafood" name="typeOfFood"/>
                </div>

                <button type="submit">submit</button>
            
            </form>
    )
}

export default Form;