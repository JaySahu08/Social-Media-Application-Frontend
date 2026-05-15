function MessageBubble({ message, isOwnMessage }) {
    return (
        <div className={isOwnMessage ? 'message own-message' : 'message'}>
            <p>{message.text}</p>
        </div>
    )
}

export default MessageBubble