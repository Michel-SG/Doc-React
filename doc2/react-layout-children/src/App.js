import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';

function App() {
    return (
        <div>
            <Header>
                <Logo />
                <Navigation></Navigation>
            </Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
