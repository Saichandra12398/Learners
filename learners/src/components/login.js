import quote from '../images/quote.jpg';
import logo from '../images/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './App.css';
import Display from "./display";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Login() {

    const responseSuccessGoogle = (response) => {
        // Code for successful login
        // console.log(response);
        var name = response.profileObj.name;
        var mail = response.profileObj.email;
        var profile_picture = response.profileObj.imageUrl;
        var role = "student";
        localStorage.setItem("profileName", name);
        localStorage.setItem("profileEmail", mail);
        localStorage.setItem("profilePicture", profile_picture);
        if (role === "student") {
            // Call the next component
            ReactDOM.render(<Display name={name} />, document.getElementById("root"));
        }
        else if (role === "mentor") {
            // Call mentors component
            ReactDOM.render(<Display name={name} />, document.getElementById("root"));
        }
    }

    const responseFailedGoogle = (response) => {
        // Code for failure login
        // console.log(response);
    }

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
                                            <GoogleLogin
                                                clientId="268233039012-fnmuiq5has4vsi7ftttqlcj16ms204t7.apps.googleusercontent.com"
                                                buttonText="Login with google"
                                                onSuccess={responseSuccessGoogle}
                                                onFailure={responseFailedGoogle}
                                                cookiePolicy={"single_host_origin"}
                                            />
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