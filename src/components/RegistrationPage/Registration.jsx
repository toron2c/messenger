import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from './../../services/firebase.js'

export default function Registration() {
    const [email, setEmail] = useState( '' );
    const [pass, setPass] = useState( '' );

    console.log( auth );

    const onSubmitHandler = async ( e ) => {
        e.preventDefault();
        try {
            let data = createUserWithEmailAndPassword( auth, email, pass );
            console.log( auth );
        } catch ( e ) {
            console.log( e );
        }
    }

    const handlePassChange = ( e ) => {
        setPass( e.target.value );
    };
    const handleEmailChange = ( e ) => {
        setEmail( e.target.value );
    };


    return (
        <div>
            <div><TextField id="outlined-basic" onChange={handleEmailChange} value={email} label="Login" variant="outlined" /></div>
            <TextField id="outlined-basic" onChange={handlePassChange} value={pass} label="Password" variant="outlined" />

            <div>
                <Button onClick={onSubmitHandler} variant="outlined">Submit</Button>
            </div>

        </div>
    )
}