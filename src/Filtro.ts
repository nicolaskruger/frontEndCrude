const filtro = document.querySelector("#filtro") as HTMLInputElement;
filtro.addEventListener("input",()=>{
    let lista = document.querySelectorAll(".interLista");
    lista.forEach(s =>{
        let text = s.querySelector("p").textContent;
        console.log(text);
        if(text.includes(filtro.value)){
            s.classList.remove("inv");
        }else{
            s.classList.add("inv");
        }
    });
});