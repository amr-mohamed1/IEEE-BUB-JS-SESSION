// var header = document.querySelectorAll('.header');
// var button = document.querySelectorAll('.btn');

// button[0].addEventListener('click',function(){
//     header[0].classList.toggle('hide')
// })


var input = document.querySelectorAll('.task_input');
var tasks_section = document.querySelectorAll('.tasks');
var backup_tasks_section = document.querySelectorAll('.backup_tasks');
var button = document.querySelectorAll('.btn');
var live_view = document.querySelectorAll('.live_view');


function inner_task(value,parent_section){
    var element = document.createElement('p');
    var elemt_value = document.createTextNode(value);
    element.append(elemt_value);
    parent_section.append(element);
}

button[0].addEventListener('click',function(){

    inner_task(input[0].value,tasks_section[0]);

    inner_task(input[0].value,backup_tasks_section[0]);

})

// keypress , keyup,keydown
input[0].addEventListener('keyup',function(){
    live_view[0].innerHTML=input[0].value;
})


