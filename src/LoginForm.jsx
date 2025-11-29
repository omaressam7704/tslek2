import React from "react";
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Garago</h1>
                <h3>Login </h3>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>

            </form>
        </div>
    );
}
export default LoginForm;