import React, {Component} from 'react';
import ArticleList from './ArticleList/index';
import listArticles from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Hello react!
                    <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? listArticles.reverse() : listArticles} />
            </div>
        )

    }
    revert = () => {
        console.log("----", "Revert click")
        this.setState({
            reverted: !this.state.reverted
        });
    }
}
export default App;