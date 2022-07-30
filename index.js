function arrayMethods(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    arrayEjemplo.forEach((elemento,indice,array)=>{
        console.log("Elemento:")
        console.log(elemento)
        console.log("Índice:")
        console.log(indice)
        console.log("Array:")
        console.log(array)
    })
}

function forEachMethod(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    const ejemploVariable = "Soy un "

    arrayEjemplo.forEach((elemento,indice,array)=>{
        console.log(ejemploVariable + elemento)
    })
}

function mapMethod(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    const ejemploVariable =  prompt("Ingrese texto a ingresar:")

    const nuevoArray = arrayEjemplo.map((elemento,indice,array)=>{
        return ejemploVariable + elemento
    })

    console.log(nuevoArray)
}

function filterMethod(){
    const arrayEjemplo = [
        {
            animal: "gato",
            patas: 4
        },
        {
            animal: "mono",
            patas: 2
        },
        {
            animal: "serpiente",
            patas: 0
        },
        {
            animal: "perro",
            patas: 4            
        }
    ]
    
    const filtro = prompt("Ingrese el número de patas:")

    const nuevoArray = arrayEjemplo.filter((elemento,indice,array)=>{
        return elemento.patas === filtro
    })    

    console.log(nuevoArray)
}

function findMethod(){
    const arrayEjemplo = [
        {
            animal: "gato",
            patas: 4
        },
        {
            animal: "mono",
            patas: 2
        },
        {
            animal: "serpiente",
            patas: 0
        },
        {
            animal: "perro",
            patas: 4            
        }
    ]
    
    const filtro = prompt("Ingrese el número de patas:")

    const elementoBuscado = arrayEjemplo.find((elemento,indice,array)=>{
        return elemento.patas === filtro
    })    

    console.log(elementoBuscado)
}

function someMethod(){
    const arrayEjemplo = [
        {
            animal: "gato",
            patas: 4
        },
        {
            animal: "mono",
            patas: 2
        },
        {
            animal: "serpiente",
            patas: 0
        },
        {
            animal: "perro",
            patas: 4            
        }
    ]
    
    const filtro = prompt("Ingrese el número de patas:")

    const elementoEncontrado = arrayEjemplo.some((elemento,indice,array)=>{
        return elemento.patas === filtro
    })    

    console.log(elementoEncontrado)
}

function reduceMethod(){
    const arrayEjemplo = [154,25,99,200]

    const elementoReducido = arrayEjemplo.reduce((total,elemento)=>{
        return total = elemento + total
    },0)    

    console.log(elementoReducido)
}

function sortMethod(){
    const arrayEjemplo = [154,25,99,200]

    const elementoOrdenado = arrayEjemplo.sort((elemento1,elemento2)=>{
        return elemento1 - elemento2
    })    

    console.log("Si 154 - 25 da negativo, entonces lo deja como está")
    console.log("Si 154 - 25 da positivo, entonces pasa el 25 adelante y el 154 atrás")
    console.log("154 - 25 = 129, positivo, entonces el nuevo array es [25,154,99,200]")
    console.log("Si 154 - 99 da negativo, entonces lo deja como está")
    console.log("Si 154 - 99 da positivo, entonces pasa el 99 adelante y el 154 atrás")
    console.log("154 - 99 = 55, positivo, entonces el nuevo array es [25,99,154,200]")
    console.log("Si 154 - 200 da negativo, entonces lo deja como está")
    console.log("Si 154 - 200 da positivo, entonces pasa el 99 adelante y el 154 atrás")
    console.log("154 - 200 = 46, negativo, entonces el array lo deja como está [25,99,154,200]")
    console.log(elementoOrdenado)
}

function spliceMethod(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    const param1 = prompt("Ingrese el índice:")
    const param2 = prompt("Ingrese cuantos elementos:")

    arrayEjemplo.splice(param1,param2)

    console.log(arrayEjemplo)
}

function sliceMethod(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    const param1 = prompt("Ingrese el índice:")
    const param2 = prompt("Ingrese cuantos elementos:")

    const nuevoArray = arrayEjemplo.slice(param1,param2)

    console.log(arrayEjemplo)
    console.log(nuevoArray)
}

function indexOfMethod(){
    const arrayEjemplo = ["perro","gato","conejo","leon","pez","tortuga"]

    const param1 = prompt("Ingrese que quiere buscar:")

    const indiceBuscado = arrayEjemplo.indexOf(param1)

    console.log(indiceBuscado)
}

function ordenSuperior(){
    const arrayEjemplo = [
        {
            tipo: "mamíferos",
            integrantes: [
                {
                    nombre: "gato",
                    patas: 4
                },
                {
                    nombre: "mono",
                    patas: 2
                },
                {
                    nombre: "leon",
                    patas: 4
                },
                {
                    nombre: "ballena",
                    patas: 0
                },
            ]
        },
        {
            tipo: "insectos",
            integrantes: [
                {
                    nombre: "hormiga",
                    patas: 6
                },
                {
                    nombre: "cucaracha",
                    patas: 6
                },
                {
                    nombre: "mantis",
                    patas: 4
                },
                {
                    nombre: "araña",
                    patas: 8
                },
            ]
        },
        {
            tipo: "reptiles",
            integrantes: [
                {
                    nombre: "serpiente",
                    patas: 0
                },
                {
                    nombre: "lagarto",
                    patas: 4
                },
                {
                    nombre: "cocodrilo",
                    patas: 4
                },
            ]
        },
    ]   
    
    alert("Vamos a buscar en que índice está el primer elemento por su cantidad de patas")
    const filtro = prompt("Ingrese la cantidad de patas:")

    const arrayDeBusqueda = arrayEjemplo.map((elemento,indice,array)=>{
        const encontrado = elemento.integrantes.find((subElemento, subIndice, subArray)=>{
            return subElemento.patas == filtro
        })
        let indiceEncontrado = ""
        if (encontrado){
            indiceEncontrado = "Hay un animal con " + filtro + " patas en el índice " + indice 
        } else {
            indiceEncontrado = "No se encontró un animal con esa cantidad de patas"
        }
        return indiceEncontrado
    })

    console.log(arrayDeBusqueda)
}