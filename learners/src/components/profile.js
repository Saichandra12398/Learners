// This is for displaying the profile page of the user
// Created by @author Nikhil on 4-6-2021
// Html by @author Prathyusha 
// Styles and bootstrap by @author Ashish
// Constructor and componentDidMount by @author Nikhil 
// Displaying log Summary by @author Sireesha
//Updating profile page to add pagenation on 19/06/2021
//By : @author Saichandra


import React, { useMemo } from 'react'
import { useTable, usePagination} from 'react-table'
import { COLUMNS } from './profilecolumns'
import '../styles/table.css'

const Profile = () => {
  var jsonResult = localStorage.getItem("list1");
      var parsed = JSON.parse(jsonResult);
      var di = {}  
      var li = []  
      for (var i=0;i<parsed.length;i++) {
        var element = parsed[i].task;
        if(element in di){
          di[element]+=1;
        }
        else{
          di[element]=1;
        }
      }
      for (const [key, val] of Object.entries(di)){
        li = [...li,{"task":key,"count":val}]
      }
  var name = localStorage.getItem("profileName")
  var email = localStorage.getItem("profileEmail")
  var picture = localStorage.getItem("profilePicture")
  var MOCK = li
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK, [])
  const { getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow,
    } = useTable({
        columns,
        data,
    }, usePagination)

    return (
      <>
          <div class="container">
          <div class="row mt-5">
            <div class="col-md-11">
              <h1 style={{ fontFamily: 'fantasy' }}> Name- {name}</h1>
              <h1 style={{ fontFamily: 'fantasy' }}> Email-{email}</h1>
            </div>
            <div class="col-md-1">
              <img
                src={picture}
                alt=""
                width="80"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </div>
              <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <br />
                      
                      <center>
                          <table {...getTableProps()}>
                              <thead>
                                  {
                                      headerGroups.map((headerGroup) => (

                                          <tr {...headerGroup.getHeaderGroupProps()}>
                                              {
                                                  headerGroup.headers.map((column) => (
                                                      <th {...column.getHeaderProps()}>{column.render('Header')}
                                                          

                                                      </th>
                                                  ))
                                              }

                                          </tr>
                                      ))}
                              </thead>

                              <tbody {...getTableBodyProps()}>
                                  {
                                      page.map(row => {
                                          prepareRow(row)
                                          return (
                                              <tr {...row.getRowProps()}>
                                                  {
                                                      row.cells.map((cell) => {

                                                          return (

                                                              <td {...cell.getCellProps()}>
                                                                  <center>{cell.render('Cell')}</center>

                                                              </td>
                                                          )
                                                      })
                                                  }
                                              </tr>
                                          )
                                      })
                                  }

                              </tbody>
                          </table>
                          <div>
                              
                              <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous

                              </button>
                              <button onClick={() => nextPage()} disabled={!canNextPage}>Next
                              </button>
                          </div>
                      </center>
                  </div>
                  <div class="col-md-3"></div>
              </div>
          </div>
      </>

  )

}






import React from 'react';
class Profile extends React.Component {
    // Initializing variables in the constructor
    constructor() {
      super();
      this.state = {
        name: "",
        emailid: "",
        profilepic: "",
        di: {},
      }
    }    
    // After loading the page this component will be called
    componentDidMount() {
        var jsonResult = localStorage.getItem("list1");
        var parsed = JSON.parse(jsonResult);    
        for (var i=0;i<parsed.length;i++) {
          var element = parsed[i].task;
          if(element in this.state.di){
            this.state.di[element]+=1;
          }
          else{
            this.state.di[element]=1;
          }
        }
      var name = localStorage.getItem("profileName")
      var email = localStorage.getItem("profileEmail")
      var picture = localStorage.getItem("profilePicture")
      this.setState({ name: name, emailid: email, profilepic: picture });
    }
    render() {
      const { di } = this.state; 
    //   Displaying the Log summary and user profile
      return ( 
         <div class="container-fluid">
          
          <div class="row"> 
            <div class="col-3"></div>
            <div class="col-6">
              <table class="table table-bordered mt-5 table-hover table-dark table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th colSpan="2" ><center>Summary</center></th>
                  </tr>
                  <tr>
                    <th><center>Task</center></th>
                    <th><center>Count</center></th>
                  </tr>
                </thead> 
                <tbody>
                  {
                    Object.keys(di).map((key, index) => (
                      <tr key={index}>
                        <td>{key}</td>
                        <td>{di[key]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table> 
            </div>
          </div> 
        </div>
      );
    }
  
  }
  export default Profile;