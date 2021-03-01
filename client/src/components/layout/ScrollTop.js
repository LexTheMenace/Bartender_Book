// Scrollbar Reference
// https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
import React, { Component } from "react";
import './ScrollToTop.css'
import { FaArrowUp } from 'react-icons/fa'

export default class ScrollToTop extends Component {
  
    state = {
      is_visible: false
    }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    window.pageYOffset > 300 ?
        this.setState({
          is_visible: true
        })
      : 
        this.setState({
          is_visible: false
        });
  }


  render() {
    const { is_visible } = this.state;
    return (
      <div 
        className="scroll-to-top">
        {is_visible && (
          <div className='scroll' onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })}>
            <p><FaArrowUp/></p>
          </div>
        )}
      </div>
    );
  }
}
