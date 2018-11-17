import React from 'react';
import ArticleList from './ArticleList/index';
import listArticles from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">Hello react!</h1>
            </div>
            <ArticleList articles={listArticles} />
        </div>
    )
}

export default App;