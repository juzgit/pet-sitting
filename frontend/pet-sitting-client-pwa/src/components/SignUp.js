import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
    //using the useState hook to manage the form input values
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //the useNavigate hook to handle navigation.
    const navigate = useNavigate();

    //an asynchronous function that is called when the user clicks the "Register" button.
    const Register = async () => {

        if(password !== confirmPassword){
            //Displays an alert if the password and confirmPassword do not match
              alert('Passwords do not match. Please confirm your password');
               //Exits the function if the passwords do not match
              return;
          }

        try{
            //makes a POST request to the /user/register endpoint with the user's registration data as the request body
            const response = await fetch('/user/register', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({ name, surname, username, password }),
            });

            //If the response is successful, an alert is displayed to the user indicating successful registration, and the server response data is logged to the console.
            if(response.ok){
                const data = await response.json();
                alert('User registered successfully');
                console.log('Server response:', data);
                //The navigate function is then called to navigate the user to the login page.
                navigate('/client-login-page');
            } else if(response.status === 400) {
                //If the response is not successful, an alert is displayed to the user indicating failed registration.
                alert('User registration failed');
            } else {
                alert('User registration failed');
            }
            //Any errors that occur during the registration process are caught and logged to the console.
        } catch(error){
            console.error('Error during registration:', error);
        }
    }; 


    return(
        <div className="user-reg-container">

            <div className='user-register-form'>
            <h2 >User Registration</h2>

                    <label className="user-reg-labels">Name:</label>
                    <input className="user-reg-input"
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    />

                    <label className="user-reg-labels">Surname:</label>
                    <input className="user-reg-input"
                    type="text"
                    value={surname}
                    placeholder="Enter your surname"
                    onChange={(e) => setSurname(e.target.value)}
                    />

                    <label className="user-reg-labels">Username:</label>
                    <input className="user-reg-input"
                    type="text"
                    placeholder="Enter your username (e.g. example@gmail.com)"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />

                    <label className="user-reg-labels">Password:</label>
                    <input className="user-reg-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className="user-reg-labels">Confirm Password:</label>
                    <input className="user-reg-input"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button className="user-reg-btn" onClick={Register}>Register</button>
                    
                    <p><Link to='/client-login-page'>Already have an account? Click here</Link></p>
                    <p><Link to='/'>Back to Home Page</Link>.</p>
            </div>

        </div>
    )
}

export default SignUp;

