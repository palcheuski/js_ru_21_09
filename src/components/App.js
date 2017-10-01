import React from 'react'
import ArticleList from './ArticleList'
import articleAccordionDecorator from '../decorators/articleAccordion'
import articles from '../fixtures'

function App() {
    let Accordion = articleAccordionDecorator(ArticleList);
    return (
        <div>
            <h1>App name</h1>
            <Accordion articles={articles} />
        </div>
    )
}

export default App