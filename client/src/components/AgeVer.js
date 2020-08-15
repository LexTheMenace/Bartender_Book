import React, { Component } from 'react';


class AgeVer extends Component {
    state = {
        legal: false
    };

    onChange = (e) => this.setState({ legal: !this.state.legal });

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.legal) {
            window.location.href = "/#/mix";
        } else {
          document.getElementById('alert').innerHTML = 'Sorry! You aren\'t old enough to drink!'
        }
    };

    render() {
        return (
            <div>
                <h2 style={{ margin: '10px 0' }}> Are You 21 Or Older? </h2>
                <form style={{ padding: '20px' }} onSubmit={ this.onSubmit }>

                    Yes! <input name='legal' type='checkbox' onChange={ this.onChange } value={ this.state.legal } /> <br/>
                    <input type="submit" value="Submit"></input>
                </form>

                <div >
                    <h1 id='alert'></h1>
                </div>
            </div>
        )
    }
}

export default AgeVer;