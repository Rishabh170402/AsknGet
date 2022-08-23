import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [bdate, setBirthdate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email && !password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, bdate, email, password }, navigate))
            console.log(name, bdate, email, password)
        }else{
            dispatch(login({ email,bdate, password }, navigate))
        }
    }
    

    return (
        <section class='auth-section'>
            { isSignup && <AboutAuth />}
            <div class='auth-container-2'>
                { !isSignup && <p style={{fontFamily:'Amazone BT' , fontSize: '30px', color: '#FFFFFF'}}><i><b>AsknGet</b></i></p>}
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4 style={{fontSize: '13px', color: '#FFFFFF'}}>Display Name</h4>    
                            <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
                            <h4 style={{fontSize: '13px', color: '#FFFFFF'}}>Date Of Birth</h4>
                            <input type="date" name='bdate' id='date' onChange={(e) => {setBirthdate(e.target.value)}} InputLabelProps={{shrink : true}}/>
                           
                            </label>
                            
                        )
                    }
                    
                    
                    <label htmlFor="email">
                        <h4 style={{fontSize: '13px', color: '#FFFFFF'}}>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h4 style={{fontSize: '13px', color: '#FFFFFF'}}>Password</h4>
                            { !isSignup && <p style={{ color: "#007ac6", fontSize:'13px'}}>forgot password?</p> }
                        </div>
                        <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                        { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p> }
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id='check'/>
                        
                            </label>
                        )
                    }
                   
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'}</button>
                   
                    {
                        isSignup && (
                            <p style={{ color: "#FFFFFF", fontSize:"13px"}}>
                                By clicking “Sign up”, you agree to our 
                                <span style={{ color: "#FFFFFF"}}> terms of<br /> service</span>,
                                <span style={{ color: "#FFFFFF"}}> privacy policy</span> and 
                                <span style={{ color: "#FFFFFF"}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p
                style={{fontSize: '13px', color: '#FFFFFF'}}> {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch} style={{fontSize: '13px', color: '#FFFFFF'}}>{ isSignup ? "Log in" : 'sign up'}</button>
                
                    
                
                
                </p>
            </div>
        </section>
    )
}

export default Auth
