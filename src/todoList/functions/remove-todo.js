export function RemoveTodo(index,currentList) {
    currentList.splice(index,1);
    currentList=[...currentList];
    
    const jsonData= JSON.stringify(currentList);
    localStorage.setItem('todoListJson',jsonData);
    
    return currentList;
}