const todo =document.querySelector('.todo-form');
const todoInput=document.querySelector('.todo-input');
const todoItemsList=document.querySelector('.todo-items');

let todos=[];

todo.addEventListener('submit',function(event){
event.preventDefault();
addTodo(todoInput.value);
})



const addTodo=item=>{
if (item){
    const todo={
        id:Date.now(),
        name: item,
        completed:false
    }
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.innerHTML='';
}
}
const renderTodos=niz=>{
todoItemsList.innerHTML='';
niz.map(elementNiza=>{
    const checked=elementNiza.completed ?'checked':null;
    const li=document.createElement('li');
    li.setAttribute('class','item');
    li.setAttribute('data-key',elementNiza.id);
    li.innerHTML=`
    <input type='checkbox' class='checkbox' ${checked}>
    ${elementNiza.name}
    <button class='delete-button'>X</button>
    `
    todoItemsList.appendChild(li);
})
}

const addToLocalStorage=niz=>{
    localStorage.setItem('todosKljuc',JSON.stringify(niz));//pretvara u string
    renderTodos(niz);
}
const getFromLocalStorage=()=>{
const reference=localStorage.getItem('todosKljuc');
if(reference){
    todos=JSON.parse(reference);//pretvara string u niz iz JSON-a
    renderTodos(todos);
}
}
const toogle=idParametar=>{
    todos.map(elementNiza=>{
        if(elementNiza.id ==idParametar){
            elementNiza.completed=!elementNiza.completed;
        }
    })
    addToLocalStorage(todos);
}
const deleteTodo=idParametar=>{
    todos=todos.filter(x=>x.id==idParametar)
    addToLocalStorage(todos);

}
getFromLocalStorage();
