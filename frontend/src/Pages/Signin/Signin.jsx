import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {SigninApi,SignUpApi} from "../../Redux/AuthReducer/AuthAction"
import "./Signin.css"
const Signin = () => {

    const [active,setActive]=useState("")
	const dispatch= useDispatch()
	const handleTab=(clas)=>{
        setActive(clas)
    }
	// ----------------------------------Sign In start-------------------------------//
   const [email1,setEmail1]=useState("")
   const [password1,setPassword1]=useState("")

	const handleSignIn=(e)=>{
		console.log("handlesign");
        e.preventDefault()
        dispatch(SigninApi({email:email1,password:password1}))
	}
	// ----------------------------------Sign In start-------------------------------//
		// ----------------------------------Sign In start-------------------------------//
		const [email2,setEmail2]=useState("")
		const [password2,setPassword2]=useState("")
	   const [name,setName]=useState("")
		 const handleSignUp=(e)=>{
			
			 e.preventDefault()
			 dispatch(SignUpApi({email:email2,password:password2,name:name}))
		 }
		 // ----------------------------------Sign In start-------------------------------//

    return (
        <div className="Maincontainer">
            
<div className={`container ${active}`} id="container">
	<div className="form-container right-panel-active sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			{/* <div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
			
			<input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
			<input value={email2} onChange={(e)=>setEmail2(e.target.value)} type="email" placeholder="Email" />
			<input value={password2} onChange={(e)=>setPassword2(e.target.value)} type="password" placeholder="Password" />
			<button onClick={handleSignUp}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="" >
			<h1>Sign in</h1>
			{/* <div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
		
			<input type="email" value={email1} onChange={(e)=>setEmail1(e.target.value)} placeholder="Email" />
			<input type="password" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button onClick={handleSignIn}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={()=>handleTab("")}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={()=>handleTab(" right-panel-active")}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


        </div>
    );
};

export default Signin;