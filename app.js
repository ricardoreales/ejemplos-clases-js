// let btnAceptar = document.getElementById("btnAceptar")
// let btnCancelar = document.getElementById("btnCancelar")

// btnAceptar.onclick = () => {alert("Gracias por su compra")}
// btnCancelar.onclick = () => {alert("Esperemos vuelvas pronto")}

// // btnAceptar.onmousemove = () => {alert("Gracias por su compra")}
// // btnCancelar.onmouseover = () => {alert("Esperemos vuelvas pronto")}

// let inputNombre = document.getElementById("nombre")
// let inputEdad = document.getElementById("edad")


// // inputNombre.onkeyup = () => alert("nombre ingresado")
// // inputEdad.onkeydown = () => alert("edad ingresada")

// inputNombre.onchange = () => alert("nombre ingresado")
// inputEdad.onchange = () => alert("Edad ingresada")


// // let miFormulario = document.getElementById("formulario")

// // miFormulario.addEventListener("submit",validarFormulario)

// // function validarFormulario(e) {
// //     e.preventDedafult()
// //     console.log("formulario enviado")
// // }


let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")

let suma = document.getElementById("suma")
let resta = document.getElementById("resta")
let multiplicacion = document.getElementById("m,ultiplicacion")
let division = document.getElementById("division")

let btnCalcular = document.getElementById("btnCalcular")


// btnAceptar.onclick = () => {alert("Gracias por su compra")}
btnCalcular.onclick = (valor1,valor2) => {
    let suma = valor1 + valor2
    let resta = valor1 - valor2
    let multiplicacion = valor1 * valor2
    let division = valor1 * valor2
}


























