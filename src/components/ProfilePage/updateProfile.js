import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { updateProfile, showProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'

class UpdateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {
        age: '',
        sexPref: '',
        relationship: '',
        funFact: ''
      }
    }
  }

  componentDidMount () {
    const { user, match } = this.props
    const { id } = this.props.match.params
    showProfile(user, id, match.params.id)
      .then(res => {
        this.setState(res.data.profile)
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onUpdateItem = event => {
    event.preventDefault()

    const { user, msgAlert, history } = this.props
    const { id } = this.props.match.params
    updateProfile(this.state, user, id)
    console.log(user)
      .then(res => {
        this.setState(res.data.profile)
        return res
      })
      .then((res) => {
        msgAlert({
          heading: 'Profile Updated Success',
          message: messages.updateProfileSuccess,
          variant: 'success'
        })
        return res
      }
      )
      .then((res) => history.push('/profile/' + res.data.profile._id))
      .catch(error => {
        this.setState({ age: '', sexPref: '', relationship: '', funFact: '' })
        msgAlert({
          heading: 'Profile Update Failed with error: ' + error.message,
          message: messages.updateProfileFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { age, sexPref, relationship, funFact } = this.state

    return (
      <div className="updateProfileContainer row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>About Me</h3>
          <Form onSubmit={this.onUpdateItem}>
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
            <Button className="updateProfileButton"
              variant="primary"
              type="submit"
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateProfile)
