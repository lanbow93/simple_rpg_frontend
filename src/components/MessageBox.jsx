function MessageBox(props){
    
    return <div className={`messageArea ${props.borderStatus}`}>
        <h1>{props.screenMessage}</h1>
    </div>
}

export default MessageBox