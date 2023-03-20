export const TaskCard = (props) => {

    const {name, onCheckClick, isClicked, onClickDelete} =props;

    function handleClick(){
        onCheckClick(name);
    }

    function handleDeleteClick(){
        onClickDelete(name);
    }

    return <article>
                <label>
                <input defaultChecked={isClicked} type="checkbox" onChange={handleClick} />
                {isClicked ? <u>{name}</u> : name }
                </label>
                <button onClick={handleDeleteClick}>Delete</button>
            </article>
}