// actualizacion de hora
const addCero = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
};
setInterval(() => {
    let date = new Date();
    document.getElementById('date').innerHTML = addCero(date.getHours()) + ':' + addCero(date.getMinutes()) + ':' + addCero(date.getSeconds());
}, 1000);

// saber si a cargado una imagen
if (localStorage.getItem("imagen")) {
    document.getElementById("imagen-fondo").src = localStorage.getItem("imagen");
}

// handle events
function selectImage() {
    document.querySelector(".container-setting>input").click();
}
document.querySelector(".container-setting").addEventListener("click", selectImage);

function cambiarImagen(e) {
    input = e.target;
    console.log(input.files[0])
    let srcImagenNueva = input.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        localStorage.setItem("imagen", this.result);
        document.getElementById("imagen-fondo").src = this.result;
    }
    reader.readAsDataURL(srcImagenNueva);
}
document.getElementById("upload-image").addEventListener("input", (e) => cambiarImagen(e))

//seach on google
const inputSearch = document.getElementById("search");
inputSearch.onkeydown = (e) => {
    if (e.key == "Enter") {
        window.open(`https://www.google.com/search?q=${inputSearch.value}&sourceid=chrome&ie=UTF-8`);
    }
}