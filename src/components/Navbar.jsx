function Navbar({ currentUser, onLogout }) {
    return (
        <header className="navbar">
            <div>
                <h1>SocialConnect</h1>
                <p>Chat, post, like, and comment with friends</p>
            </div>

            {currentUser && (
                <div className="nav-user">
                    <span>{currentUser.name}</span>
                    <button type="button" onClick={onLogout}>
                        Logout
                    </button>
                </div>
            )}
        </header>
    )
}

export default Navbar