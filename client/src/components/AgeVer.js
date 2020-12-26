import React, { useState } from 'react';
import { VERIFY_AGE } from '../actions';
import { useGlobalContext } from '../Store';


const AgeVer = () => {
    const { dispatch } = useGlobalContext();
    const [ legal, setLegal ] = useState(false);

    const onChange = (e) => setLegal(!legal);

    const onSubmit = (e) => {
        e.preventDefault();
        if (legal) {
            dispatch({ type: VERIFY_AGE, payload: legal })
        } else {
            console.log("Sorry");
            const sorry = document.getElementById('underage')
        }
    };

        return (
            <div>
                <h2 style={{ margin: '10px 0' }}> Are You 21 Or Older? </h2>
                <form style={{ padding: '20px' }} onSubmit={onSubmit}>

                    Yes! <input name='legal' type='checkbox' onChange={onChange} value={legal} /> <br/>
                    <input type="submit" value="Submit"></input>
                </form>

                <div id='underage' style={{ display: 'none' }}>
                    <h1 id='alert'> Sorry! You aren't old enough to drink! </h1>
                </div>
            </div>
        )
    
}

export default AgeVer;