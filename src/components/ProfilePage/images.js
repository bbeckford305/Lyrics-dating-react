import React, { Component } from 'react'
// import Slider from 'react-slick'

class UserImage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      images: null
    }
  }

onImageChange = event => {
  this.setState({ images: event.target.image[0] })
}
onImageUpload = () => {
  const imageData = new ImageData()
  imageData.append(
    'myFile',
    this.state.images,
    this.state.images.name
  )
};
        imageData = () => {
          if (this.state.images) {
            return (
              <div>
                <h2>Image Detail:</h2>
                <p>Image Name: {this.state.images.name}</p>
              </div>
            )
          } else {
            return (
              <div>
                <br />
                <h4>Upload Image</h4>
              </div>
            )
          }
        };

        render () {
          return (
            <div>
              <h1>Lyrics Dating</h1>
              <h3>Upload Profile Images</h3>
              <div>
                <input type="file" onChange={this.onImageChange} />
                <button onClick={this.onImageUpload}>Upload</button>
              </div>
              {this.imageData()}
            </div>
          )
        }
}
export default UserImage
