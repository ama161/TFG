import React from 'react';
import firebase from 'firebase';

class FileUpload extends React.Component {
  constructor() {
    super();

    this.handleUpload = this.handleUpload.bind(this);

    this.state = {
      uploadValue: 0,
      picture: null
    }
  }

  handleUpload(event){
    let file = event.target.files[0];
    let storage = firebase.storage().ref(`/fotos/${file.name}`);
    let upload = storage.put(file);

    upload.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({uploadValue: percentage});
    } , error => {
        console.log(error);
    }, () => {
        this.setState({
            uploadValue: 100,
            picture: upload.snapshot.downloadURL
        });
    });
  }

  render(){
    return(
      <div>
        <progress value={this.state.uploadValue} max="100"></progress>
        <br/>
        <input type="file" onChange={this.handleUpload} />
        <br/>
        <img width="320" src={this.state.picture} alt=""/>
      </div>
    )
  }
}

export default FileUpload;
