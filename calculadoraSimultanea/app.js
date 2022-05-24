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


let inputValor1 = document.getElementById("valor1")
let inputValor2 = document.getElementById("valor2")

let btnCalcular = document.getElementById("btnCalcular")

const multiCalculadora = (a, b) => {
    let suma = a + b
    let rest = a - b
    let mult = a * b
    let div = a / b
    return [suma,rest,mult,div]
}

btnCalcular.onclick = () => {

    let num1 = parseFloat(inputValor1.value)
    let num2 = parseFloat(inputValor2.value)

    let result = multiCalculadora(num1,num2)
    console.log(result)
    // let suma = num1 + num2
    // let rest = num1 - num2
    // let mult = num1 * num2
    // let div = num1 / num2

    // document.getElementById("suma").innerHTML = suma
    // document.getElementById("resta").innerHTML = rest
    // document.getElementById("multiplicacion").innerHTML = mult
    // document.getElementById("division").innerHTML = div

    document.getElementById("suma").innerHTML = result[0]
    document.getElementById("resta").innerHTML = result[1]
    document.getElementById("multiplicacion").innerHTML = result[2]
    document.getElementById("division").innerHTML = result[3]

}




















