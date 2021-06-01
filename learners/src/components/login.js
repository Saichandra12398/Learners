import quote from '../images/quote.jpg';
import logo from '../images/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Login(){
    return (
        <div class="container-fluid" style={{ fontfamily: 'Georgia', fontsize: 35 }}>
            <div class="row">
                <div class="col-md-1"> 
                 {/* add logo here */}
                 <img src={logo} width="100" /> 
                 </div>
                <div class="col-md-10">
                    <center>
                        <h1 id="s1">i-LMS</h1></center></div>
                <div class="col-md-1"></div>
            </div>
            <div class="row">
                <div class="col-md-6">

                    <div class="card-border-0 fs-1" style={{ backgroundcolor: 'white', }}>
                        <center><div class="card-body quote" style={{ fontfamily: 'Georgia' }}>
                            QUOTE OF THE DAY
                    </div></center>
                    </div>
                    <div class="card-border-0" style={{ backgroundcolor: 'white' }}>
                        <center><div class="card-body">
                            {/* add quote of the day image */}
                            <img src={quote} class="img-thumbnail" alt="quote" />
                        </div></center>
                    </div>
                </div>
                <div class="col-md-6" >
                    <div class="row mt-5 ml-5">
                        <center><h1>Welcome to MSIT</h1></center>
                        </div>
                    <div class="row mt-5"></div>
                    <div class="row mt-5">
                        <div class="card-border-0" style={{ backgroundcolor: 'white' }}>
                            <center>
                                <div class="card-body">
                                    <div class="btn-group">

                                        <div class="first mt-5 ml-5" >
                                         {/* add google signin button */}
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;