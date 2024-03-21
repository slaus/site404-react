import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Wrapper, Main, Footer, Header } from './components';
import './App.css';

const App = () => {
    return (
        <Router>
            <Wrapper>
                <Header />
                <Main/>
                < Footer />
            </Wrapper >
        </Router >
    );
};

export default App;
