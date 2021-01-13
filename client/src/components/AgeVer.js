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
            sorry.style.display = 'block'
            setTimeout(() => {
            sorry.style.display = 'none'
            window.location = 'https://www.google.com/search?sxsrf=ALeKk03Dn94VLmuDWaoQwOGtyWjEyN8D-Q%3A1609422772928&ei=tNftX5OROIOKggeupJyoDw&q=games&oq=games&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIHCAAQsQMQQzILCC4QsQMQxwEQowIyCggAELEDEBQQhwIyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAELEDMgcIABAUEIcCOgIIADoNCC4QxwEQowIQFBCHAjoICAAQsQMQyQNQnBxY2B9gkiJoAHABeACAAWSIAc0DkgEDNC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwiTu7GFr_jtAhUDheAKHS4SB_UQ4dUDCA0&uact=5'
                
            }, 3000);
        }
    };

        return (
            <div>
                <div className='age-verification'>
                <h2 > Are You 21 Or Older? </h2>
                <form  onSubmit={onSubmit}>

                    Yes! <input name='legal' type='checkbox' onChange={onChange} value={legal} /> <br/>
                    <input type="submit" value="Submit"></input>
                </form>
                </div>
                <div id='underage' style={{ display: 'none', zIndex:'10' }}>
                    <h1 id='alert'> Sorry! You aren't old enough to drink! </h1>
                </div>
            </div>
        )
    
}

export default AgeVer;