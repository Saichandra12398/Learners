// This is for displaying the deatils after the login 
// Created by Nikhil on 1-6-2021
import React from 'react';
class Display extends React.Component {
    render() {
      return (
        <h2>{this.props.name} Logged in successfully </h2>
      );
    }
  }
  export default Display;