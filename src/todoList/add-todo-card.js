
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import {TodoInputs} from './todo-inputs';
export const AddTodoCard=({titleChanged,bodyChanged,addList,addCardIsOpen,toggleAddTodoCard})=> {
  return (
    <MDBModal isOpen={addCardIsOpen} toggle={toggleAddTodoCard}>
        <MDBModalHeader toggle={toggleAddTodoCard}>Add Todo</MDBModalHeader>
        <MDBModalBody>
          <TodoInputs titleChanged={titleChanged}  bodyChanged={bodyChanged} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggleAddTodoCard}>Close</MDBBtn>
          <MDBBtn type="button" color="primary" onClick={addList} >Add Todo</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  }