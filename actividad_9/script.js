const flipValue = () => {
    let word = document.getElementById("valor").value;
    let flip = word.split('').reverse().join('');
    document.getElementById("flip").innerHTML = flip;
}