function Navbar({ currentUser, onLogout }) {
    return (
        <header className="navbar">
            <div className="brand">
                <h1>SocialConnect</h1>
                <p>Dashboard</p>
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
