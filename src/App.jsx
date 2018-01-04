import React, { Component } from 'react';
import Banner from './components/banner/banner.jsx';
import Main from './components/main';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner> </Banner>
                <Main> </Main>
            </div>
        );
    }
}

export default App;
