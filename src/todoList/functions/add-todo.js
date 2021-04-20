export function AddTodo(currentList,title,body) {
    if(title.trim().length>=3 && body.trim().length>=3)
    {
      let date = new Intl.DateTimeFormat('tr', { year: 'numeric',month: 'short',day: '2-digit', hour:'2-digit',minute:'2-digit',second:'2-digit' }).format(Date.now());
      var todo={"title":title,"body":body,"date":date};
      if(currentList==null)
      currentList=[];
      currentList.push(todo);
      const jsonData= JSON.stringify(currentList);
      
      localStorage.setItem('todoListJson',jsonData);


      if(currentList===undefined)
       {
         return [JSON.parse(localStorage.getItem("todoListJson"))];
       }
       else
      {
        return [...currentList];
      }
    }
    else
    {
      alert("hata");
    }    
}