import { Button, Checkbox, FormLabel} from "@chakra-ui/react";

export const TaskCard = (props) => {

    const {name, onCheckClick, isClicked, onClickDelete} =props;

    function handleClick(){
        onCheckClick(name);
    }

    function handleDeleteClick(){
        onClickDelete(name);
    }

    return <article>
                <FormLabel>
                <Checkbox defaultChecked={isClicked} type="checkbox" onChange={handleClick}>
                {isClicked ? <u>{name}</u> : name }
                </Checkbox>
                
                <Button  size="sm" ml="15" color="#4FD1C5" onClick={handleDeleteClick}>Delete</Button>
                </FormLabel>
            </article>
}