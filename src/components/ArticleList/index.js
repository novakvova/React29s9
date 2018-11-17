import React from 'react';
import Article from '../Article';
import './style.css';

export default function({articles}) {
    const articleElementns = articles.map( x =>
            <li key={x.id} className="article-list__li"><Article article={x}/></li>
        );
    return (
        <ul className="article-list__ul">
            {articleElementns}
            {/* <li><Article article={articles[0]}/></li>
            <li><Article article={articles[1]}/></li>
            <li><Article article={articles[2]}/></li> */}
        </ul>
    )
}