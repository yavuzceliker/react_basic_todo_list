import React, { useState } from "react";
import { MDBBtn, MDBIcon } from 'mdbreact';
export function Todo({title,body,date,removeTodo,index}) {

    var [state,setState]=useState(false);
    const ToggleDetail=()=>setState(!state);
  
    return (
    <div className="card m-2">
      <div className="card-header" >
        
        <div className="row todo-title" onClick={ToggleDetail}>
        <div className="col-6 text-left">{title}</div>
        <div className="col-6 text-right">
          <i className="text-right">{date}</i>
        </div>
        </div>
      </div>
      
      <div className={"collapse "+ (state?"show":"")}>
        <div className="card-body">
          {body}
          <br/>
          <MDBBtn onClick={()=>removeTodo(index)} outline rounded  className="float-right mb-3" size="sm"  color="deep-orange" ><MDBIcon icon="trash" className="mr-2" />Remove Todo</MDBBtn>
        </div>
      </div>
    </div>);
  }