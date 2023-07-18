function GameOptions(props){
    return <div className={`gameOptionsArea ${props.borderStatus}`}>
        {props.buttonOptions}
    </div>
}

export default GameOptions