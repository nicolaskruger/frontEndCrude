const strLista = ".lista";
var form = document.querySelector(".forma");
console.log(form);
form.querySelector("#submit").addEventListener("click", submitGet);
function resetInv(doc) {
    doc.classList.remove("inv");
}
function setInv(doc) {
    doc.classList.add("inv");
}
function setAllInv() {
    form.querySelectorAll("p").forEach(p => {
        setInv(p);
    });
}
function finError(todo) {
    setAllInv();
    let b = false;
    if (todo.nome == "") {
        let nomeP = form.querySelector(".nomeP");
        resetInv(nomeP);
        b = true;
    }
    if (todo.desc == "") {
        let nomeP = form.querySelector(".descP");
        resetInv(nomeP);
        b = true;
    }
    if (isNaN(todo.data.getDate()) || todo.data.getTime() < new Date().getTime()) {
        let nomeP = form.querySelector(".dataP");
        resetInv(nomeP);
        b = true;
    }
    return b;
}
function getTodo() {
    let nome = form.querySelector("#nome");
    let decr = form.querySelector("#desc");
    let date = form.querySelector("#data");
    return new toDo(nome.value, decr.value, new Date(date.value));
}
function setTodo(tod) {
    let lista = document.querySelector(strLista);
    let li = document.createElement("li");
    li.classList.add("interLista");
    tod.getInfo().forEach(s => {
        let p = document.createElement("p");
        p.textContent = s;
        li.appendChild(p);
    });
    li.appendChild(document.createElement("button"));
    lista.appendChild(li);
}
function submitGet(event) {
    event.preventDefault();
    let t = getTodo();
    console.log(t);
    if (finError(t))
        return;
    setTodo(t);
}
//# sourceMappingURL=addData.js.map