import React from 'react'
import { VERIFY_AGE } from '../../contexts/drink/actions'
import { useAuthContext } from '../../contexts/auth/AuthStore';
import './age-ver.styles.css';
const AgeVerificationPage = () => {
    const { dispatch } = useAuthContext();

    return (
        <div className='age-ver page'>
            <h2 style={{margin: '10px'}}>Are You Old Enough To Drink ( Age 21 or over ) ?  </h2>
            <div id='underage' style={{ display: 'none', zIndex:'10' }}>
                    <h1 id='alert'> Sorry! You aren't old enough to drink!
                    Redirecting you...
                     </h1>
                </div>
            <div className='button-container'>
                <button onClick={() => dispatch({ type: VERIFY_AGE, payload: true })}>
                    YES
                </button>
                <button onClick={() => {
                       document.getElementById('underage').style.display = 'block'
                       setTimeout(() => {
                       window.location = 'https://www.google.com/search?sxsrf=ALeKk03Dn94VLmuDWaoQwOGtyWjEyN8D-Q%3A1609422772928&ei=tNftX5OROIOKggeupJyoDw&q=games&oq=games&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIHCAAQsQMQQzILCC4QsQMQxwEQowIyCggAELEDEBQQhwIyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAELEDMgcIABAUEIcCOgIIADoNCC4QxwEQowIQFBCHAjoICAAQsQMQyQNQnBxY2B9gkiJoAHABeACAAWSIAc0DkgEDNC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwiTu7GFr_jtAhUDheAKHS4SB_UQ4dUDCA0&uact=5'
                       }, 2500);
                }}>
                    NO
                </button>
            </div>
        </div>
    )
}

export default AgeVerificationPage
