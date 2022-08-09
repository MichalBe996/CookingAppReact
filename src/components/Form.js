import React, { useState } from 'react'
import FormSignup from './FormSignup'
import Header from './Header'
import FormSuccess from "./FormSuccess"

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitForm(){
    setIsSubmitted(true);
  }
  return (
    <div className="form-div">
        <Header />
        {!isSubmitted ? <FormSignup/> : <FormSuccess/>} 
      
    </div>
  )
}

export default Form