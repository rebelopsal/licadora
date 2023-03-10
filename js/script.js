
let estadoLicuadora = ("apagado");
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sonido");
let sonidoLicuadoraBoton = document.getElementById("blender-button-sound");

function encenderLicuadora() {
    if(estadoLicuadora == "apagado"){
        estadoLicuadora = "encendido";
        hacerRuido()
        licuadora.classList.add("active");
    }else{
        estadoLicuadora = "apagado";
        hacerRuido()
        licuadora.classList.remove("active");
    }
}

function hacerRuido() {
    if(sonidoLicuadora.paused){
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.play();
    }else{
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currenTime = 0;
    }
}