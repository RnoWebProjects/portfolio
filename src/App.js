import './App.css';
import React from 'react';
import {Container, MainBody} from './Styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/Theme';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <MainBody> 
      <Container>
        <Showcase /> 
        <Skills/>
        <MyProjects/>
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
