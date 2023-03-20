export const TaskCard = (props) => {

    const {name, onCheckClick, isClicked} =props;

    function handleClick(){
        onCheckClick(name);
    }

    return <article>
                <label>
                <input type="checkbox" onChange={handleClick}/>
                {isClicked ? <u>{name}</u> : name }
                </label>
            </article>
}