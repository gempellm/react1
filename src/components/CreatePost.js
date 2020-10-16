import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function CreatePost() {
    return (
        <Container style={{marginBottom: "20px"}}>
            <Form>
                <Form.Group controlId="postTopic">
                    <Form.Label>Write your topic</Form.Label>
                    <Form.Control type="text" placeholder="enter topic of your post" />
                </Form.Group>

                <Form.Group controlId="postEssence">
                    <Form.Label>Write your thoughts</Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="write anything you want" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default CreatePost