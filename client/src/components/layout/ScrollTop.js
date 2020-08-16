// Scrollbar Reference
// https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
import React, { Component } from "react";

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
    if (window.pageYOffset > 300) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }
  }

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div 
        className="scroll-to-top">
        {is_visible && (
          <div style={{ 
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
        border: '1px gray solid'
        }} onClick={() => this.scrollToTop()}>
            <p>TOP</p>
          </div>
        )}
      </div>
    );
  }
}
