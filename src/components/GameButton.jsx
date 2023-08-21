function GameButton(props){
    if(props.isDisabled) {
        return <button onClick={props.clickHandler} disabled>{props.buttonText}</button>
    } else {
        return <button onClick={props.clickHandler} >{props.buttonText}</button>
    }
}

export default GameButton