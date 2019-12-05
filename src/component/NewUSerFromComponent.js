import React, {Component} from 'react';
import {Form, Label, Input, FormGroup, Button} from 'reactstrap';

class NewUserFrom extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstNameCHange = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    handleChangeLastNameCHange = e => {
        this.setState({
            lastName: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.setState({
            firstName: '',
            lastName: ''
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        FirstName
                    </Label>
                    <Input required placeholder='first name' onChange={this.handleChangeFirstNameCHange} value={this.state.firstName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                    lastName
                    </Label>
                    <Input required placeholder='first name' onChange={this.handleChangeLastNameCHange} value={this.state.lastName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button block outline type='submit' color='primary'>
                        create
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default NewUserFrom;