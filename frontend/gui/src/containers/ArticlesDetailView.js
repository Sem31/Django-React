import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd'



export default class ArticlesDetailView extends Component {

    state = {
        article: {}
    }

    componentDidMount() {
        console.log(this.props.match)
        const articleId = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/articles/${articleId}`)
            .then((res) => {
                this.setState({ article: res.data })
                console.log(res.data)
            })
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>

        )
    }
}
