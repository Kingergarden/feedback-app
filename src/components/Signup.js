import { useState } from 'react'
import { signupFields } from '../constants/formFields'
import  Input  from './Input'
import FormAction from './FormAction'
import FormExtra from './FormExtra'

const fieldsSignUp = signupFields;
let fieldState = {};
fieldsSignUp.forEach(field => fieldState[field.id]='');



export default function SignUp() {

    const [signUpState, setSignUpState] = useState(fieldState);

    const handleChange = (e) => {
        setSignUpState({...signUpState,[e.target.id]:e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const authenticateUser = () =>{

    }

    return (
      
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="mt-8 space-y-6"> 
        {
            signupFields.map(field=>
                <Input 
                    key = {field.id}
                    handleChange={handleChange}
                    value={signUpState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}

                />
                )

        }
        
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Sign Up"/>

        
        </form>
        
        
    )


}