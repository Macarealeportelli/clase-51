const cuadrado1 = document.querySelector(`div[data-x='0'][data-y='0']`)
const cuadrado2 = document.querySelector(`div[data-x='0'][data-y='1']`)
const cuadrado3 = document.querySelector(`div[data-x='1'][data-y='0']`)
const cuadrado4 = document.querySelector(`div[data-x='1'][data-y='1']`)

// Crear una funcion sonAdyancentes que reciba como parametros dos elementos de HTML 
// y determine si son adyacentes o no de acuerdo a sus coordenadas


// console.log(sonAdyacentes(cuadrado1, cuadrado2)) // true
// console.log(sonAdyacentes(cuadrado1, cuadrado3)) // true
// console.log(sonAdyacentes(cuadrado1, cuadrado4)) // false

const sonAdyacentes = (elemento1, elemento2) => {

    if ((Number(elemento1.dataset.x) === Number(elemento2.dataset.x) && Number(elemento1.dataset.y) === Number(elemento2.dataset.y + 1))
        || (Number(elemento1.dataset.x) === Number(elemento2.dataset.x) && Number(elemento1.dataset.y) === Number(elemento2.dataset.y - 1))
        || (Number(elemento1.dataset.y) === Number(elemento2.dataset.y) && Number(elemento1.dataset.x) === Number(elemento2.dataset.x + 1))
        || (Number(elemento1.dataset.y) === Number(elemento2.dataset.y) && Number(elemento1.dataset.x) === Number(elemento2.dataset.x - 1))){
        return true
    }
    else {
        return false
    }
}

console.log(sonAdyacentes(cuadrado1, cuadrado2))