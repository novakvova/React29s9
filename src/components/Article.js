import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }
    
    render() {
        console.log('----', this.props);
        const { article } = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handlerClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
                
            </div>
        )
    }
    handlerClick = () => {
        console.log("------", 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

// function Article(props) {
//     console.log('----', props);
//     const {article} = props;
//     const body=<section>{article.text}</section>
//     return (
//         <div>
//             <h2>{article.title}</h2>
//             {body}
//             <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
//         </div>
//     )
// }

export default Article;