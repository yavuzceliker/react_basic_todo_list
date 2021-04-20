
import {MDBBtn } from 'mdbreact';
export function TodoButtons({clearList,toggleAddTodoCard}) {
    return(
      <div className=" row">
      <div className="col-6">
        <MDBBtn type="button" color="primary" onClick={toggleAddTodoCard} >Add Todo</MDBBtn>
      </div>
        <div className="col-6 text-right">
        <MDBBtn color="red" onClick={clearList} >Remove Todos</MDBBtn>
        </div>
      </div>
    );
  }