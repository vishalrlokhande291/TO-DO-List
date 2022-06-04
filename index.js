var inputBox = document.getElementById('input-ele');
var addBtn=document.getElementById('addBtn');
var contentDiv=document.getElementById('view-id');

var todoList=[];

function addToDo(){
    let val=inputBox.value;
    inputBox.value='';
    if(val==''){
        return;
    }
    todoList.push(val);
    printToDo();
}
function printToDo(){
    let todoData='';
    for(let i =0;i<todoList.length;i++){
        todoData+='<p>'+ todoList[i]+'</p>';
        todoData+='<button class="delBtn" id ="'+ i +'" onClick = "deleteTodo(this)"> Del </button>';
    }
    contentDiv.innerHTML=todoData;
}
function deleteTodo(obj) {
    todoList.splice(obj.id,1);
    printTodo();
}


addBtn.addEventListener('click' ,addToDo);