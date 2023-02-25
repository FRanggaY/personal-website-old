// import logo from './logo.svg';
// import './App.css';

//LIBRARIES
import { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';

//COMPONENTS
import Sidebar from './components/sidebar/index';
import ScrollToTop from './components/scroll/scrolltotop';
import ScrollToTopButton from './components/scroll/scrolltotopbutton';
import ThemeButton from "./components/theme/themebutton";


//CONTAINERS
import Home from './containers/pages/home/home';
import Resume from './containers/pages/resume/resume';
import Portfolio from './containers/pages/portfolio/portfolio';
import Contact from './containers/pages/contact/contact';

//THEME CONFIG
import {themes, GlobalStyles} from './theme';


const Pages = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;

  @media only screen and (max-width: 1024px){
    width: 80%;
  }

  @media only screen and (max-width:512px){
    width: 60%;
  }
`;

const Text = styled.h3`
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;


function App() {

  const location = useLocation();
  const [theme, setTheme] = useState("light");


  const NoMatchPage = () => {
    return (
      <Text>404 - Not found</Text>
    );
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ScrollToTop/>
      <Sidebar />
      <ThemeButton theme={theme} setTheme={setTheme} />
      <Pages>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolios" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatchPage} />
        </Switch>
      </Pages>
      <ScrollToTopButton/>
    </ThemeProvider>
  );
}

export default App;
