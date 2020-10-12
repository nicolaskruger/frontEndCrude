const strLista = ".lista";

var form =document.querySelector(".forma");
console.log(form);

form.querySelector("#submit").addEventListener("click",submitGet);

function resetInv(doc:Element){
    doc.classList.remove("inv");
}
function setInv(doc:Element){
    doc.classList.add("inv");
}
function setAllInv(){
    form.querySelectorAll("p").forEach(p=>{
        setInv(p);
    })
}
function finError(todo:toDo):boolean{
    setAllInv();
    let b:boolean = false;
    if(todo.nome==""){
        let nomeP = form.querySelector(".nomeP");
        resetInv(nomeP);
        b= true;
    }
    if(todo.desc==""){
        let nomeP = form.querySelector(".descP");
        resetInv(nomeP);
        b= true;
    }
    
    if(isNaN(todo.data.getDate()) ||todo.data.getTime()<new Date().getTime()){
        let nomeP = form.querySelector(".dataP");
        resetInv(nomeP);
        b= true;
    }
    return b;
}

function getTodo():toDo{
    let nome = form.querySelector("#nome") as HTMLInputElement;
    let decr = form.querySelector("#desc") as HTMLInputElement;
    let date = form.querySelector("#data") as HTMLInputElement;
    

    return new toDo(nome.value,decr.value,new Date(date.value));
}
function setTodo(tod:toDo){
    let lista = document.querySelector(strLista);
    let li = document.createElement("li");
    li.classList.add("interLista");
    tod.getInfo().forEach(s =>{
        let p = document.createElement("p");
        p.textContent =s;
        li.appendChild(p);
    });
    li.appendChild(document.createElement("button"));
    lista.appendChild(li);
}
function submitGet(event:Event){
    event.preventDefault();
    let t:toDo = getTodo();
    console.log(t);
    if(finError(t)) return;
    setTodo(t);
}