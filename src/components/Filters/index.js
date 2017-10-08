import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import { connect } from 'react-redux'
import { setUserFilter, setSelectedArticlesFilter, setDateRangeFilter } from '../../AC'

class Filters extends Component {
    static propTypes = {
    };

    state = {
        username: ''
    }

    render() {
        const { username, articles, selectedArticles, dateRange } = this.props;

        return (
            <div>
                User: <input type='text' value={username} onChange={this.handleUserChange} />
                <SelectFilter articles={articles} selected={selectedArticles} onSelect={this.handleArticleSelect} />
                <DateRange range={dateRange} onDayClick={this.handleDayClick} />
            </div>
        )
    }

    handleUserChange = ev => {
        this.props.dispatch(setUserFilter(ev.target.value));
    }

    handleArticleSelect = selected => {
        this.props.dispatch(setSelectedArticlesFilter(selected));
    }

    handleDayClick = range =>{
        this.props.dispatch(setDateRangeFilter(range));;
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
    selectedArticles: state.articlesFilter.selectedArticles,
    username: state.articlesFilter.user,
    dateRange: state.articlesFilter.dateRange
});

export default connect(mapStateToProps)(Filters);