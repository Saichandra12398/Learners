// File created by @author Pratyusha on 01-06-2021
// Styles and bootstrap added by @author Ashish
// Images added by @author Sireesha

import quote from '../images/quote.jpg';
import logo from '../images/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import '../App.css';
import bg from '../images/bg.jpeg';
import Display from "./display";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Login() {
    // Code for successful login
    // google response function @author Sai Chandra
    const responseSuccessGoogle = (response) => {
        // console.log(response);
        var user_name = response.profileObj.name;
        var user_mail = response.profileObj.email;
        var user_profile_picture = response.profileObj.imageUrl;
        var role = "student";
        localStorage.setItem("profileName", user_name);
        localStorage.setItem("profileEmail", user_mail);
        localStorage.setItem("profilePicture", user_profile_picture);
        if (role === "student") {
            // Call the student component
            ReactDOM.render(<Display name={user_name} />, document.getElementById("root"));
        }
        else if (role === "mentor") {
            // Call mentors component
            ReactDOM.render(<Display name={user_name} />, document.getElementById("root"));
        }
    }

    // Code for failure login
    // google response function @author Sai Chandra
    const responseFailedGoogle = (response) => {
        // console.log(response);
    }


    return (
        <div class="container-fluid" style={{ fontfamily: 'Georgia', fontsize: 35, backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div class="row">
                <div class="col-md-1">
                    {/* add logo here */}
                    <img src={logo} width="100" alt="logo" />
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
                                            {/* login @author Sri Charan */}
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