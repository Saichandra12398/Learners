// This is for displaying the log activity of the user
// Created by @author Sireesha on 3-6-2021
// Html by @author Prathyusha 
// Styles and bootstrap by @author Nikhil 
// Constructor and componentDidMount by @author Ashish 
// Displaying log activity by @author Sireesha
import React from 'react';
class Logs extends React.Component {
// Initializing variables in the constructor
    constructor() {
        super();
        this.state = {
            name: "",
            emailid: "",
            profilepic: "",
            li: []
        }
    }
    // After loading the page this component will be called
    componentDidMount() {
        var jsonResult = localStorage.getItem("list1");
        var parsed = JSON.parse(jsonResult);
        console.log(this.state.li);
        var name = localStorage.getItem("profileName")
        var email = localStorage.getItem("profileEmail")
        var picture = localStorage.getItem("profilePicture")
        this.setState({ li: [...parsed], name: name, emailid: email, profilepic: picture });
        window.addEventListener("beforeunload", () => {
            localStorage.setItem("list1", JSON.stringify(this.state.li));
        });
    }
    render() {
        return (
            // Displaying the log activity along with the time stamp
            <div class="container-fluid">
                <div class="row mt-5">
                    <div class="col-md-11">
                        <h1 style={{ fontFamily: 'fantasy' }}> Name- {this.state.name}</h1>
                        <h1 style={{ fontFamily: 'fantasy' }}> Email-{this.state.emailid}</h1>
                    </div>
                    <div class="col-md-1">
                        <img
                            src={this.state.profilepic}
                            alt=""
                            width="80"
                            style={{ borderRadius: '50%' }}

                        />
                    </div>
                </div>
                <div class="row">

                    <div class="col-3"></div>
                    <div class="col-6">
                        <table class="table table-bordered mt-5 table-hover table-dark table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th colSpan="2" ><center>Logs</center></th>
                                </tr>
                                <tr>
                                    <th><center>TASK</center></th>
                                    <th><center>Time Stamp</center></th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.li.map((ele, index) =>
                                    <tr key={index}>
                                        <td>{ele.task}</td>
                                        <td>{ele.timestamp}</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>

                    </div>


                </div>
            </div>
        );
    }

}
export default Logs;