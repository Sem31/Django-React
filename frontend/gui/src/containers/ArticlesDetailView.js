import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'

import ArticlesForm from '../components/ArticlesForm'


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

    handleDelete = (event) => {
        const articleId = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/articles/${articleId}`)
        this.props.history.push('/')
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>

                <br />

                <h2>Update an Article</h2>

                <ArticlesForm
                    requestType='put'
                    articleId={this.props.match.params.articleID}
                    btnText='Update'
                />

                <form onSubmitCapture={this.handleDelete}>
                    <Button type="danger" htmlType="submit">
                        Delete
                    </Button>
                </form>
            </Card>

        )
    }
}
