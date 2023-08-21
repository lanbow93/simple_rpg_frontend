function MessageBox(props){
    
    return <div className="messageArea">
        {props.screenMessage.length < 40 ? <h1>{props.screenMessage}</h1> : <h2>{props.screenMessage}</h2>}
    </div>
}

export default MessageBox