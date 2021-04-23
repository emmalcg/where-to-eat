function DeleteButton({item, onClick}) {
    return (
        <button  value={item} onClick={onClick} className='deleteButton'>
            {item} <span>X</span>
        </button>
    )
}

export default DeleteButton