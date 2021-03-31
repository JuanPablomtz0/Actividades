let list = document.getElementById("lista");

let arg = [];

const showValue = () => arg.map(valor => {
    let componetLi = document.createElement("li");
    componetLi.innerHTML = valor;
    list.appendChild(componetLi);
})



const agregarValue = () =>{
    let valor = document.getElementById("valor");
    list.innerHTML = "";
    arg.push(valor.value);
    console.log(arg);
    showValue();
    valor.value= "";
}

const limpiarValue = () => {
    list.innerHTML = "";
    arg = [];
}

showValue();