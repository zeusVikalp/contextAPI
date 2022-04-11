import React from "react";


const Login = () => {
    const[formDetails,setFormDetails] = React.useState({
        email:"",
        password:"",
    })
 


const handelChange = (e) => {
    const{ name,value} = e.target

    setFormDetails({
        ...formDetails,
        [name]:value
    })
    
}
const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails)        
}

    const {email,password} = formDetails
    return (
       <div>
           <h1>Login page</h1>
           <form onSubmit={handelSubmit}>

           <input name=  "email" type="text" placeholder="Email" value={email} onChange = {handelChange}/>
           <input name="password" type="text" placeholder = "password" value = {password} onChange = {handelChange}/>
           
           </form>

       </div>
    )
 
        
    
}

export {Login}