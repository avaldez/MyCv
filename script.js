
const habilidades = document.querySelectorAll("#habilidades ul li");
console.log("habilidades",habilidades);

habilidades.forEach((habilidad) => {
    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(porcentajeInicio);
    const colorInicio = "green";
    const colorFinal = "white";
    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
});


const formu=document.getElementById('datosform');
console.log(formu);

function validar(){
    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('email').value; 
    const mensaje = document.getElementById('mensaje').value;
    if(!nombre||!mail||!mensaje){
        alert('todos los campos son obligatorios');
        return;
    }
    alert('MENSAJE ENVIADO');
    const formu=document.getElementById('datosform');
    formu.reset();

}


