import { Form, Input, Button } from 'antd';
import React from 'react'
import axios from 'axios'


class ArticlesForm extends React.Component {

    handleFormSumit = (event, requestType, articleId) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/articles/', {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.error(err))

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/articles/${articleId}`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
        }

    }

    render() {
        return (
            <Form onSubmitCapture={(event) => this.handleFormSumit(
                event,
                this.props.requestType,
                this.props.articleId
            )}>
                <Form.Item label="Title">
                    <Input name='title' placeholder='Title' />
                </Form.Item>
                <Form.Item label="Content">
                    <Input name='content' placeholder='content' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {this.props.btnText}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default ArticlesForm;
