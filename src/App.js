import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper, Main, Footer, Header } from './components';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

const App = () => {
    return (
        <Router>
            <Wrapper>
                <LanguageProvider>
                    <Header />
                    <Main />
                    <Footer />
                </LanguageProvider>
            </Wrapper >
        </Router >
    );
};

export default App;
