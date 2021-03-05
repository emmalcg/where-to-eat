function Form() {
    return (
        <section>
            <form action="submit">
                <legend>Add a restaurant to the list</legend>
                <label htmlFor="restaurantName"></label>
                <input type="text" name="restaurantName" id="restaurantName"/>
            <div class="radioChoices">
                <p>Natural wine?</p>
                <label htmlFor="yesWine">yes</label>
                <input type="radio" id="yesWine" value="yesWine" name="wine"/>

                <label htmlFor="noWine">no</label>
                <input type="radio" id="noWine" value="noWine" name="wine"/>
            </div>

            <div class="foodTypes">

            </div>

            <div class="flavours">

            </div>
            </form>
        </section>
    )
}

export default Form;