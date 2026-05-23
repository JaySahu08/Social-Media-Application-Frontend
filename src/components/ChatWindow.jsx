import { useState } from 'react'
import MessageBubble from './MessageBubble'

function ChatWindow({ currentUser, selectedFriend, messages, onSendMessage, onClose }) {
    const [messageText, setMessageText] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (!messageText.trim()) {
            return
        }

        onSendMessage(messageText.trim())
        setMessageText('')
    }

    if (!selectedFriend) {
        return (
            <section className="chat-card empty-chat">
                <h2>Chat</h2>
                <p>Select a friend to start chatting.</p>
            </section>
        )
    }

    return (
        <section className="chat-card">
            <header className="chat-header">
                <div className="chat-person">
                    <div className="avatar">
                        {selectedFriend.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h2>{selectedFriend.name}</h2>
                        <p>Online</p>
                    </div>
                </div>

                <button
                    type="button"
                    className="icon-button close-chat"
                    onClick={onClose}
                    aria-label="Close chat"
                >
                    x
                </button>
            </header>

            <div className="messages">
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={message}
                        isOwnMessage={message.senderId === currentUser.id}
                    />
                ))}
            </div>

            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={messageText}
                    onChange={(event) => setMessageText(event.target.value)}
                    placeholder={`Message ${selectedFriend.name}`}
                />
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default ChatWindow
