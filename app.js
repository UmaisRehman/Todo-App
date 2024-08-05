let arr = [];
let ontodo = document.querySelector('ol')
var inp = document.querySelector('input')





function loop(){
    ontodo.innerHTML = '';
    for(let i =  0; i < arr.length;  i++){
        ontodo.innerHTML += `
        <li>${arr[i]}
        <button onclick="d(${i})">Delete</button>
        <button onclick="update(${i})">Edit</button>
        </li>`;
    }
    }



function add(){
    ontodo.innerHTML = '';
    arr.push(inp.value);
    inp.value = '';    
    for(let i =  0; i < arr.length;  i++){
        ontodo.innerHTML += `
        <li>${arr[i]}
        <button onclick="d(${i})">Delete</button>
        <button onclick="update(${i})">Edit</button>
        </li>`;
    }
}

function d(index){
    arr.splice(index,1)
    loop()
}
function update(index){
    var  upvalue = prompt() ;
    arr.splice(index,1,upvalue)
    loop()
}