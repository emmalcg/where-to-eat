import { Icon, InlineIcon } from '@iconify/react';
import checkmarkIcon from '@iconify-icons/gridicons/checkmark';

function Checkbox(props) {
    return (
        <>
            <label 
            htmlFor={props.htmlFor}
            tabIndex="0">
                <input 
                key={props.value} 
                type="checkbox" 
                id={props.id} 
                value={props.value} 
                name={props.name} 
                onChange={props.onChange} 
                checked={props.checked}
                />
                {props.text}
                <Icon icon={checkmarkIcon} />
            </label>
        </>
    )
}

export default Checkbox;