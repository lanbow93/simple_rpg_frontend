import gameButton from "./gameButton"

function menuButtons(props){
    return <div className={props.menuClassName}>
        {props.buttonArray.map((button) => <gameButton clickHandler={button.clickHandler} buttonText={button.text} isDisabled={button.isDisabled} />)}
    </div>
}

export default menuButtons