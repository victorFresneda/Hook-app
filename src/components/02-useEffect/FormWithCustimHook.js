import React, { useEffect, useState }  from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';
//import { useEffect } from 'react';



export const FormWithCustimHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    
    useEffect(() => {
      
        console.log( ' El email cambio ')
      
    }, [email]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(  formValues );
    }
    
    


    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustimHook</h1>
            <hr></hr>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <hr></hr>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            
            <hr></hr>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            
            <hr></hr>

           <button type="submit" className='btn btn-primary'>
               Guardar
           </button>

            
        </form>
    )
}
