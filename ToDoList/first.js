
const inputbox = document.getElementById('inputbox');
const addbtn  = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');

let edittodo = null;

// function tp add to do
const addtodo = ()=>{
    // alert("hello");
    const inputtext = inputbox.value.trim();
    if(inputtext.length <= 0 ){
        alert("you must write something in your to do ");
        return false;
    }
  
    if(addbtn.value === "Edit"){
        edittodo.target.previousElementSibling.innerHTML = inputtext;
        editlocaltodos(inputtext);
        addbtn.value = "Add";
        inputbox.value = "";
    }

    else{
    // creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputtext;
    li.appendChild(p);
    
    // creating edit btn
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn","editbtn");
    li.appendChild(editbtn);

    // creating delete btn
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn","deletebtn");
    li.appendChild(deletebtn);

    todolist.appendChild(li);
    inputbox.value = "";

    savelocalrodos(inputtext);
  }

}

// function to update todo: (edit/delete)
const updatetodo = (e)=>{
    // console.log(e.target);   its print what ever clic in p 
     if(e.target.innerHTML==="Remove"){
      todolist.removeChild(e.target.parentElement);
      deletelocaltodos(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        edittodo = e;

    }

}

// function to save local todo
const savelocalrodos = (todo) =>{
   let todos;
   if(localStorage.getItem("todos") === null){
    todos = [];
   }
   else {
    todos = JSON.parse(localStorage.getItem("todos"));
   }
  
   todos.push(todo);
   localStorage.setItem("todos",JSON.stringify(todos));
//    console.log(todos);
}
// function to get local todo
const getLocaltodos = () =>{
    let todos;
   if(localStorage.getItem("todos") === null){
    todos = [];
   }
   else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(todo => {

  // creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = todo;
    li.appendChild(p);
    
    // creating edit btn
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn","editbtn");
    li.appendChild(editbtn);

    // creating delete btn
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn","deletebtn");
    li.appendChild(deletebtn);

    todolist.appendChild(li);
    });
   }
}

// function to dlete local todo
const deletelocaltodos = (todo) =>{
   
      let todos;
       if(localStorage.getItem("todos") === null){
        todos = [];
       }
       else {
        todos = JSON.parse(localStorage.getItem("todos")); 
       }

    

   let todoText = todo.children[0].innerHTML;
   let todoIndex = todos.indexOf(todoText);
   todos.splice(todoIndex,1);
   localStorage.setItem("todos", JSON.stringify(todos));
//  araay functions :   slice / splice 

   console.log(todoIndex);
    
}

const editlocaltodos =(todo) =>{
 let todos = JSON.parse(localStorage.getItem("todos"));
 let todoIndex = todos.indexOf(todo);
 todos[todoIndex] = inputbox.value;
 localStorage.setItem("todos", JSON.stringify(todos));

}
document.addEventListener('DOMContentLoaded' , getLocaltodos );
addbtn.addEventListener('click',addtodo);
todolist.addEventListener('click', updatetodo);
