function FriendList({ friends, selectedFriend, onSelectFriend }) {
    return (
        <section className="friends-card">
            <h2>Friends</h2>

            {!friends.length ? (
                <p>No friends found.</p>
            ) : (
                <div className="friend-list">
                    {friends.map((friend) => (
                        <button
                            type="button"
                            key={friend.id}
                            className={
                                selectedFriend?.id === friend.id ? 'friend active' : 'friend'
                            }
                            onClick={() => onSelectFriend(friend)}
                        >
                            <span className="avatar">{friend.name.charAt(0).toUpperCase()}</span>
                            <span>
                <strong>{friend.name}</strong>
                <small>{friend.email}</small>
              </span>
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}

export default FriendList