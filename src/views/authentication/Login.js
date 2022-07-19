import Input from "../../components/reusables/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import "./login.css"
import { useState } from "react"



const Login = () => {
    const[userInput, setUserInput] = useState({})
     const[fieldError, setFieldError] = useState({email: 
        {message:"", error: false},
        password: {message:"", error: false}
    })
      
    const handleChange = (e) => {
            setUserInput({...userInput, [e.target.name]:e.target.value})
            cheeckIfFieldIsEmpty(e)
    }

    const handleClick = () =>{
        console.log(userInput)
    }

    const cheeckIfFieldIsEmpty = (e) => {
        switch(e.target.name){
            case "email":
                if(e.target.value === ""){
                    setFieldError(
                        {
                            ...fieldError,
                             [e.target.name]: 
                             {
                                message: "please enter a valid email",
                                error: true
                            }
                        })
                }else{
                    setFieldError({
                        ...fieldError, [e.target.name]:{
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "password":
                if(e.target.value === ""){
                    setFieldError(
                        {
                            ...fieldError,
                            [e.target.name]: 
                            {
                                message: "please enter a password",
                                error: true
                            }
                        })
                }else{
                    setFieldError({
                        ...fieldError, [e.target.name]:{
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            
            default:
                break;

        }

    }
    const checkIfItIsEmail = () =>{

    }

    return(
       <div className="loginContainer">
            <div className="leftSide">
               
                <div className="leftSide-container">
                    <a>
                        Dont have an account?
                        <span style={{
                            color : 'var(--primary_green)',
                            marginLeft: '4px'
                            }}>
                            sign up
                        </span>
                    </a>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>
                            We are an event management platform, aimed at helping you facilitate and run a smooth event
                        </p>
                    </div>
                    <div className="input-button-fields">
                        <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"/>
                        <p className={fieldError.email.error ? "fieldError" : "noFieldError"}>
                            {fieldError.email.message}
                        </p>

                        <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password"/>
                        <p className={fieldError.password.error ? "fieldError" : "noFieldError"}>
                            {fieldError.password.message}
                        </p>

                        <button onClick={handleClick}>Get Into Norbs</button>
                    </div>
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon"></div>
                        </a>

                    </div>
                </div>
            </div>
            <div className="rightSide">

            </div>

        </div>
       
    )
}
export default Login