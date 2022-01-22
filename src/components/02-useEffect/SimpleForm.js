import React, { useState }  from 'react'
import './effects.css';
import { useEffect } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        
        console.log( 'vamos!')

        }, [] );


    useEffect(() => {
        
        console.log( 'Cambio el email')

        }, [ email ] );

    const handleInputChange = ({target}) => {
        
        setformState({
            ...formState,
            [ target.name ]: target.value
        })
    }
    


    return (
        <>
            <h1>useEffect</h1>
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

            

           { (name === '123') && < Message/> }

            
        </>
    )
}
