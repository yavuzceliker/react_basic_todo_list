
import {MDBBtn } from 'mdbreact';
export function TodoButtons({clearList,toggleAddTodoCard}) {
    return(
      <div className=" row">
      <div className="col-6">
        <MDBBtn type="button" color=" amber darken-2 text-white" onClick={toggleAddTodoCard} >Add Todo</MDBBtn>
      </div>
        <div className="col-6 text-right">
        <MDBBtn color="deep-orange" onClick={clearList} >Remove Todos</MDBBtn>
        </div>
      </div>
    );
  }