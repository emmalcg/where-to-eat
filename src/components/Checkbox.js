function Checkbox(props) {

    return (
        <>
            <input 
            key={props.value} 
            type="checkbox" 
            id={props.id} 
            value={props.value} 
            name={props.name} 
            onChange={props.onChange} 
            checked={props.checked}
            />
            <label 
            htmlFor={props.htmlFor}
            >
                {props.text}
            </label>
            </>
    )
}

export default Checkbox;