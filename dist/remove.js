var iter = document.querySelectorAll(".interLista");
document.querySelector("#submit").addEventListener("click",atlIter);
atlIter();
function atlIter(){
    console.log(iter);
    if(iter !=undefined){
        iter.forEach(i =>{
            i.querySelector("button").removeEventListener("click",removeToDo);
        });    
    }
    iter = document.querySelectorAll(".interLista");
    iter.forEach(i =>{
        i.querySelector("button").addEventListener("click",removeToDo)
    });
}

function removeToDo(event){
    event.target.parentNode.remove();
}