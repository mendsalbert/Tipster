import React, { Component } from 'react';
import * as IoIcons from 'react-icons/io';

class Group extends Component {


  render() {
    return (
      <div className="container-fluid bg-white mt-5">
      <div className="row">
      <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '900px' }}>
      <div className="content mr-auto ml-auto">

              <div className="col-lg-12 mb-4 mt-5" >
              <div className="card-header">
              <button className="bg-white text-success border-1 border-success">
              <IoIcons.IoMdAddCircle size={23} /><a className='text-success' style={{textDecoration:'none'}} href="/groupmain"> Tipster Group 1</a>
            </button>
              </div>
              </div>
      </div>
      </main>
      </div>
</div>
    );
  }
}

export default Group;