import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import UserImage from './images'

class CreateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      age: '',
      height: '',
      sexPref: '',
      relationship: '',
      sex: '',
      funFact: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateProfile = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props
    createProfile(this.state, user)
      .then(res => {
        this.setState(res.data.profile)
        return res
      })
      .then((res) => {
        msgAlert({
          heading: 'Profile Created Success',
          message: messages.createProfileSuccess,
          variant: 'success'
        })
        return res
      }
      )
      .then((res) => history.push('/profile/' + res.data.profile._id))
      .catch(error => {
        this.setState({ age: '', height: '', sexPref: '', relationship: '', sex: '', funFact: '' })
        msgAlert({
          heading: 'Profile Create Failed with error: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { age, height, sexPref, relationship, sex, funFact } = this.state

    return (

      <div className="createProfileContainer row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>About Me</h3>
          <Form onSubmit={this.onCreateProfile}>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                required
                type="number"
                name="age"
                value={age}
                placeholder="Enter Your Age"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control
                required
                type="text"
                name="height"
                value={height}
                placeholder="Enter Your Height"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="sexPref">
              <Form.Label>Sexual Preference</Form.Label>
              <Form.Control
                required
                type="text"
                name="sexPref"
                value={sexPref}
                placeholder="Enter Sexual Preference"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="relationship">
              <Form.Label>Relationship Status</Form.Label>
              <Form.Control
                required
                type="text"
                name="relationship"
                value={relationship}
                placeholder="Relationship Status"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="sex">
              <Form.Label>Sex</Form.Label>
              <Form.Control
                required
                name="sex"
                value={sex}
                type="text"
                placeholder="sex"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="funFact">
              <Form.Label>Fun Fact</Form.Label>
              <Form.Control
                required
                name="funFact"
                value={funFact}
                type="text"
                placeholder="Fun Fact"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button className="createProfileButton"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateProfile)
