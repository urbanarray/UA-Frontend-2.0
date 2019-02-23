import React from 'react';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

const Signup = () => {
    return (
        <div>
            <Form>
                <FormLabel>Email Address</FormLabel>
                <FormControl type="email" placeholder="Email address" />
            </Form>
        </div>
    )
}

export default Signup;