import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap/'


export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={e=>this.props.updateFunction(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.itemToShow.name} name='name'/>                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>img</Form.Label>
                    <Form.Control type="text" placeholder={this.props.itemToShow.img} name='img'/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>level</Form.Label>
                    <Form.Control type="text" placeholder={this.props.itemToShow.level} name='level'/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

                
            </div>
        )
    }
}

export default UpdateForm
