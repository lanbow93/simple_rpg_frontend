import GameButton from "./GameButton"

function MenuButtons(props){
    return <div className={props.menuClassName}>
        {props.buttonArray.map((button) => <GameButton clickHandler={button.clickHandler} buttonText={button.text} isDisabled={button.isDisabled} />)}
    </div>
}

export default MenuButtons