import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { showProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class ShowProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      age: [],
      height: [],
      sexPref: [],
      relationship: [],
      sex: [],
      funFact: []
    }
  }

  componentDidMount () {
    const { msgAlert, user, match } = this.props
    const { id } = this.props.match.params
    showProfile(user, id, match.params.id)
      .then(res => {
        this.setState(res.data.profile)
        msgAlert({
          heading: 'User profile success',
          message: messages.showProfileSuccess,
          variant: 'success'
        })
      })
      .catch(error => {
        this.setState({ age: '', height: '', sexPref: '', relationship: '', sex: '', funFact: '' })
        msgAlert({
          heading: 'User profile show failed with error: ' + error.message,
          message: messages.showProfileFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { age, height, sexPref, relationship, sex, funFact } = this.state
    return (
      <div>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/Profile_Image.jpg" />
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
          Fun Fact: {funFact}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>AGE: {age}</ListGroup.Item>
            <ListGroup.Item>HEIGHT: {height}</ListGroup.Item>
            <ListGroup.Item>SEX: {sex}</ListGroup.Item>
            <ListGroup.Item>SEXUAL PREFERENCE: {sexPref}</ListGroup.Item>
            <ListGroup.Item>RELATIONSHIP: {relationship}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#update-profile">Update</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withRouter(ShowProfile)
