// This is for displaying the details after the login 
// Created by @author Nikhil on 1-6-2021
// Coding and functionality @author Sai Chandra and Sri Charan(Peer programming)
// Styles and bootstrap by @author Nikhil 
// Constructor and componentDidMount by @author Ashish 

import React from 'react';
import Logs from "./logs";
import Profile from "./profile";
import logo from '../images/msit.jpg';
import ReactDOM from 'react-dom';
import { Dropdown } from 'react-bootstrap';
class Display extends React.Component {
   // Initializing variables in the constructor
  constructor() {
    super();
    this.state = {
      list: [],
      profile_Picture:""
    }
  }
 // After loading the page this component will be called
  componentDidMount() {
    var cnt = localStorage.getItem("list1");
    var parsed1 = JSON.parse(cnt);
    var picture = localStorage.getItem("profilePicture");

    if (cnt != null) {
      this.setState({ list: [...parsed1],profile_Picture:picture });
    }   
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("list1", JSON.stringify(this.state.list));
    });
  }

// Functions which are triggerd when a button is clicked by the user
  itworkshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  csppshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  adsshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  idsshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  pscshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  lhtlshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  lsrwshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  pcsshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  ppcshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  presenshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  startitshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  startss = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  attendshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  gradeshow = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  
  action = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] },this.profile);
  }
  profile = () => {
    localStorage.setItem("list1", JSON.stringify(this.state.list));
    ReactDOM.render(<Profile />, document.querySelector("#root"));
  }
  action2 = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  something = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] });
  }
  // Function to call new component
  redirect = () => {
    localStorage.setItem("list1", JSON.stringify(this.state.list));
    ReactDOM.render(<Logs />, document.querySelector("#root"));
  }

  logdata = (event) => {
    var s = event.target.value;
    const timestamp = Date.now();
    this.setState({ list: [...this.state.list, { task: s, timestamp: new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp) }] }, this.redirect);
  }


  render() {

    return (


      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: 'black', color: 'white' }}>
          <div className="col-md-3 pt-3">
            <center><img src={logo} alt="MSIT" /></center>
          </div>
          <div className="col-md-6 pt-4">
            <center>
              <h1>LEARNING MANAGEMENT SYSTEM</h1>
            </center>
          </div>
          <div className="col-md-2 pt-4">
            <center>
              <h4>{this.props.name}</h4>
            </center>
          </div>
          <div className="col-md-1">
            <center><Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <center><img src={this.state.profile_Picture} alt="Student photo" width="80" style={{ borderRadius: '50%' }} />
                </center>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item><center><button type="button" class="btn btn-light" onClick={this.action} value="Action">Profile</button></center></Dropdown.Item>
                <Dropdown.Item><center><button type="button" class="btn btn-light" onClick={this.action2} value="Action2">Another action</button></center></Dropdown.Item>
                <Dropdown.Item><center><button type="button" class="btn btn-light" onClick={this.something} value="something">Something else</button></center></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></center>


          </div>
        </div>
        <div className="row">

          <div className="col-md-8 pt-3">
            <div className="container" style={{ backgroundColor: '#F85F73', minHeight: '57vh' }}>
              <div className="row pt-3 ml-5">
                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.itworkshow} value="ITWS">
                    ITWS
                            </button>
                </div>
                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.csppshow} value="CSPP">
                    CSPP
                            </button>
                </div>

                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.adsshow} value="ADS">
                    ADS
                            </button>
                </div>


                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.idsshow} value="IDS">
                    IDS
                            </button>
                </div>

                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.pscshow} value="PSC">
                    PSC
                            </button>
                </div>



              </div>
            </div>
            <br />
            <div className="container" style={{ backgroundColor: '#FBE8D3', minHeight: '57vh' }}>
              <div className="row pt-3 ml-5">
                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.lhtlshow} value="LHTL">
                    LHTL
                            </button>
                </div>


                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.lsrwshow} value="LSRW">
                    LSRW
                            </button>
                </div>


                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.pcssshow} value="PCS">
                    PCS
                            </button>
                </div>


                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.ppcshow} value="PPC">
                    PPC
                            </button>
                </div>


                <div className="d-grid gap-2 col mx-auto">
                  <button type="button" className="btn btn-warning" onClick={this.presenshow} value="presentation">
                    PRESENTATIONS
                            </button>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4 pt-3">
            <div className="container mt-4" style={{ backgroundColor: '#FBE8D3', minHeight: '25vh' }}>
              <div className="row pt-3 ml-5 pb-3">
                <div className="card text-center">
                  <div className="card-header" style={{ fontSize: '30px', fontFamily: 'serif' }}>
                    <center>&emsp;&emsp;&emsp;<b>LOGS</b>&emsp;&emsp;&nbsp;</center>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={this.logdata} value="logactivity">
                      View Activity
                            </button>
                  </div>
                  <div className="card-footer text-muted">
                    UPDATED- TODAY
                            </div>
                </div>
              </div>
            </div>
            <div className="container mt-4" style={{ backgroundColor: '#FBE8D3', minHeight: '25vh' }}>
              <div className="row pt-3 ml-5 pb-3">
                <div className="card text-center">
                  <div className="card-header" style={{ fontSize: '30px', fontFamily: 'serif' }}>
                    <center>&emsp;&emsp;&emsp;<b>IT COURSE</b>&emsp;&emsp;&nbsp;</center>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={this.startitshow} value="IT module">Start Today's Module</button>
                  </div>
                  <div className="card-footer text-muted">
                    UPDATED- TODAY
                            </div>
                </div>
              </div>
            </div>
            <div className="container mt-4" style={{ backgroundColor: '#F85F73', minHeight: '25vh' }}>
              <div className="row pt-3 ml-5 pb-3">
                <div className="card text-center">
                  <div className="card-header" style={{ fontSize: '30px', fontFamily: 'serif' }}>
                    <b>SOFT SKILLS COURSE</b>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={this.startss} value="SS Module">Start Today's Module</button>
                  </div>
                  <div className="card-footer text-muted">
                    UPDATED- TODAY
                            </div>
                </div>
              </div>
            </div>
            <div className="container mt-4" style={{ backgroundColor: '#FBE8D3', minHeight: '25vh' }}>
              <div className="row pt-3 ml-5 pb-3">
                <div className="card text-center">
                  <div className="card-header" style={{ fontSize: '30px', fontFamily: 'serif' }}>
                    <b>EXTERNAL LINKS</b>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={this.attendshow} value="Attendance">Check Attendance</button>
                    <button type="button" className="btn btn-primary" onClick={this.gradeshow} value="Grades">Check Course gardes</button>
                  </div>
                  <div className="card-footer text-muted">
                    UPDATED- TODAY
                            </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Display;