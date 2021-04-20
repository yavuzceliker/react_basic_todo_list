import React, { useState } from "react";
import { MDBContainer, MDBRow } from 'mdbreact';

import '../index.css';
import  {AddTodoCard} from './add-todo-card';
import  {TodoListCard} from './todo-list-card';
import  {RemoveTodo} from './functions/remove-todo';
import  {AddTodo} from './functions/add-todo';

const FormPage = () => {

  //#region Initialize todo list
  var list=[];
  if(localStorage.getItem("todoListJson")!=="undefined" && localStorage.getItem("todoListJson")!==null)
  {
    list=JSON.parse(localStorage.getItem("todoListJson"));
  }
  const [todoList,setList]=useState(list);
//#endregion

  //#region Add new todo to list
  const AddList=()=>setList(currentList=>{
    setCardState(()=>false);
    return AddTodo(currentList,title,body,setCardState);
  });
//#endregion

//#region Clear todo list
  const ClearList=()=>setList(()=>{
    localStorage.removeItem('todoListJson');
    return [];
  });
//#endregion

//#region Show/hide new todo card
const [addCardIsOpen,setCardState]=useState(false);
  const ToggleAddTodoCard=()=>setCardState((currentState)=>!currentState);
//#endregion

//#region Todo Inputs changed events

var title="",body="";
  const TitleChanged=event=>title=event.target.value;
  const BodyChanged=event=>body=event.target.value;
  //#endregion
  
  const DelTodo=(index)=>setList(currentList=>RemoveTodo(index,currentList));
return (
    <div className="main-bg peach-gradient color-block-5  w-100">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center bd-highlight " >
          <TodoListCard removeTodo={DelTodo} toggleAddTodoCard={ToggleAddTodoCard} clearList={ClearList} todoList={todoList}/>
          <AddTodoCard  addCardIsOpen={addCardIsOpen} toggleAddTodoCard={ToggleAddTodoCard} addList={AddList} titleChanged={TitleChanged} bodyChanged={BodyChanged}/>
        </div>
      </div>
    </div>);
};









export default FormPage;