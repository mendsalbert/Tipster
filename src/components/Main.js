import React, { Component } from 'react';
import Identicon from 'identicon.js';
import * as FaIcons from 'react-icons/fa';
// import CommentModal from './CommentModal';
import { RWebShare } from 'react-web-share';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid bg-dark mt-3">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '700px' }}>
            <div className="content mr-auto ml-auto">
            <p>&nbsp;</p>
              <h2 className='text-white'>Share Post</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
              <FaIcons.FaUpload size={50} className='shadow p-3 mb-3 mr-3' color='#fff' 
              onClick={()=>{this.upload.click()}}
              />
              <input ref={(ref) => this.upload = ref} style={{display: 'none'}} type='file' accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv .ogg .wmv" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="What is happening?"
                        required />
                  </div>
                <button type="submit" className="btn btn-success btn-block btn-lg">Post</button>
              </form>
              <p>&nbsp;</p>
              
              { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                        alt='identicon'
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="text-center">
                          <iframe src={`https://ipfs.infura.io/ipfs/${image.hash}`} 
                       ></iframe></div>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                          {/* <CommentModal /> */}
                          <RWebShare
                          data={{
                            text: "Hi, check out this post on Tipster",
                            url: `https://ipfs.infura.io/ipfs/${image.hash}`,
                            title: "Tipster",
                          }}
                          onClick={() => console.log("shared successfully!")}
                        >
                          <FaIcons.FaShare size={18} className="pt-1 ml-2" color='#00b761' />
                        </RWebShare>
                        
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;