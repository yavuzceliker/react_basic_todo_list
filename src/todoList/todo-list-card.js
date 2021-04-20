
import {  MDBCol,MDBCard } from 'mdbreact';
import {Todo} from './todo';
import {TodoButtons} from './todo-buttons';
export function TodoListCard({todoList,clearList,toggleAddTodoCard,removeTodo}) {
  var index=-1;
    return (
    <div  className="mt-5 col-lg-6 col-md-12 "  >
      <div className="card p-3"  style={{maxHeight:"80vh"}}>
        <p className="h2 text-center mb-4">Todo List</p>
        <div className="scrollbar scrollbar-primary  mt-2 mx-auto" style={{ width:"100%" }}>
        {
          todoList.length===0
          ? <h3 className="mv-2 text-center">You dont have todo</h3>
          : todoList?.map ((e)=>{
            index++; 
            return <Todo removeTodo={removeTodo} index={index}  key={index+e["title"]} title={e["title"]} body={e["body"]} date={e["date"]}/>;
          })
        }
        </div>
        <TodoButtons  clearList={clearList} toggleAddTodoCard={toggleAddTodoCard}/>
      </div>
    </div>);
  
  }