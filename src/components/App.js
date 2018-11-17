import React from 'react';
import Article from './Article';
import listArticles from '../data';

function App() {
    return (
        <div>
            <h1>Hello react!</h1>
            <Article article = {listArticles[0]} />
        </div>
    )
}

export default App;