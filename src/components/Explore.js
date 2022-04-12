import React, { Component } from 'react';
import { FormControl, Button } from "react-bootstrap";
import * as IoIcons from 'react-icons/io';

class Explore extends Component {


  render() {
    return (
        <div className="container-fluid bg-white mt-5">
            <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '700px' }}>
            <div className="content mr-auto ml-auto">
            <div className="col-lg-12 p-3 m-auto mb-3">
                <div className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    required
                />
                <Button
                    variant="outline-success"
                >
                    <IoIcons.IoMdSearch size={23} />
                </Button>
                </div>
            </div>

                    <div className="col-lg-12 mb-4 mt-5" >
                    <div className="card-header">

                    </div>
                    </div>
            </div>
            </main>
            </div>
      </div>
    );
  }
}

export default Explore;