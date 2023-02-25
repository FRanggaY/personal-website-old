//LIBRARIES
import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowUpImage from '../../assets/img/logo/up-arrow.png';

const ScrollButton = styled.button`
    background: var(--white);
    position: fixed;
    bottom: 16px;
    right:32px;
    width:2.5rem;
    height:2.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:18px;
    color: var(--white);
    text-decoration: none;
    transition: all .4s;
    cursor: pointer;

    img{
      width: 2rem;
      height: 2rem;
    }

`;

class ScrollToTopButton extends Component {

    state = {
        thePosition: false,
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
          if (window.scrollY > 10) {
            this.setState({ thePosition: true });
          } else {
            this.setState({ thePosition: false });
          }
        });
        window.scrollTo(0, 0);
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    renderGoTopIcon = () => {
        if (this.state.thePosition) {
          return (
            <>
              <ScrollButton onClick={this.scrollToTop}>
                <img src={ArrowUpImage} alt=""/>
              </ScrollButton>
            </>
          );
        }
    };

    render (){
        return(
            <>{this.renderGoTopIcon()}</>
        )
    }
}

export default ScrollToTopButton;