import { useState } from 'react'

function AuthForm({ onLogin, onRegister }) {
    const [mode, setMode] = useState('login')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (mode === 'login') {
            onLogin({
                email: formData.email,
                password: formData.password,
            })
            return
        }

        onRegister(formData)
    }

    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-intro">
                    <p className="eyebrow">Welcome</p>
                    <h2>{mode === 'login' ? 'Login to your account' : 'Create a new account'}</h2>
                    <p>
                        Join your friends, share posts, comment, like, and chat in real time.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {mode === 'register' && (
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </label>
                    )}

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </label>

                    <button type="submit">
                        {mode === 'login' ? 'Login' : 'Register'}
                    </button>
                </form>

                <button
                    type="button"
                    className="text-button"
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                >
                    {mode === 'login'
                        ? "Don't have an account? Register"
                        : 'Already have an account? Login'}
                </button>
            </section>
        </main>
    )
}

export default AuthForm