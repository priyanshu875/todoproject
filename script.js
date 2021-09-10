// alert("hello");
let showtodo= document.getElementById('showtodo');
let showtodobox =document.getElementById('showtodobox');
const todotext = document.getElementById('todotext');
let todoaddtextbox = document.getElementById('todoaddtextbox');
var body = document.body;
let hr =document.getElementById('hr');
let themebody = document.getElementById('themebody');
// localStorage.clear();
function addnew(){
    todoaddtextbox.classList.add("show");
}
showtodos();
function addtodo(){

    let todos=localStorage.getItem('todo');
    if(todos==null){
        todosObj=[];
    }
    else{
        todosObj=JSON.parse(todos);
    }

    todosObj.push(todotext.value);
    todotext.value="";
    todoaddtextbox.classList.remove("show");
    localStorage.setItem('todo', JSON.stringify(todosObj));
    showtodos();
}


function showtodos(){
    let todos=localStorage.getItem('todo');
    if(todos==null){
        todosObj=[];
    }
    else{
        todosObj=JSON.parse(todos);
    }
    let html="";
    todosObj.forEach(function (element, index){
        html += `<div class="showtodobox">
                    <div class="showtodotext">
                       <p>&#9783;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${element}</p>
                    </div>
                    <div class="showtodoaction">
                    <button id ="${index}" onclick="ticktodo(${index})"> &#10004;</button> <button id ="${index}" onclick="crosstodo(${index})"> &#10060;</button>
                    </div>
                </div>`;
        
    })

    if(todosObj.length != 0){
            showtodo.innerHTML=html;
    }
    else{
            showtodo.innerHTML="Click on 'Add new' to add items";
            showtodo.style.fontSize='1.6rem';
            showtodo.style.textAlign='center';
    }
}
function cancel(){
    todoaddtextbox.classList.remove("show");
    // showtodos();
}
function ticktodo(index){
    alert('Good Job!');
    let todos = localStorage.getItem('todo');
    let deletetodoObj = JSON.parse(todos);
    if(index > -1){
        deletetodoObj.splice(index , 1);
        
    }
    localStorage.setItem('todo' , JSON.stringify(deletetodoObj));
        showtodos();
    
}
function crosstodo(index){
    alert('You Sure ?');
    let todos = localStorage.getItem('todo');
    let deletetodoObj = JSON.parse(todos);
    if(index > -1){
        deletetodoObj.splice(index , 1);
        
    }
    localStorage.setItem('todo' , JSON.stringify(deletetodoObj));
        showtodos();
    
}
function themechange(){
    themebody.classList.add('show');
    hr.classList.remove('show')
}

function theme1(){
    body.className="";
    body.classList.add("theme1");
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function theme2(){
    body.className="";
    body.classList.add("theme2");
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function theme3(){
    body.className="";
    body.classList.add("theme3");
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function theme4(){
    body.className="";
    body.classList.add("theme4");
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function theme5(){
    body.className="";
    body.classList.add("theme5");
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function back(){
    themebody.classList.remove('show');
    hr.classList.add('show')
}
function allclear(){
    localStorage.clear();
    showtodos();
}
