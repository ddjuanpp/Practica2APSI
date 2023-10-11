type Pokemon = {//Usado para pokemon
    name: string,
    id: string,
    types: types[]
}

export interface types {//Usado para pokemon
    slot: number
    type: tipoPokemon[]
}

export interface tipoPokemon {//Usado para pokemon
    name: string
    url: string
}
type Type = {//Usado para tipo, al solo necesitar nombre y generacion es lo unico que pedimos
    name: string,
    generation: genera[]
}
export interface genera{//Usado para tipo de aqui sale la informacion de la parte de generacion
    name: string
    url: string
}


const fetchData = async (name: string) => { //Este sirve para la opcion de elegir el pokemon por nombre
    const link = "https://pokeapi.co/api/v2/pokemon/";//Este es el link para cualquier pokemon, el nombre se añade despues por el usuario
    const link2 = link + name;//se añade el parametro del nombre al link, para tener el link completo al pokemon que pide
    try {
        const response = await fetch(link2);
        const data: Pokemon = await response.json();
        console.log("---------------------------------")
        console.log("Pokemon: " , data.name)
        console.log("id: " , data.id)
        console.log("tipos: " , data.types)
        
    } catch (error) {
      console.log(error);
    }
};
const fetchData2 = async (name: string) => { //Este lo he reciclado del de arriba, pero cambiando el link para los tipos en vez de pokemons
    const link = "https://pokeapi.co/api/v2/type/";//Este es el link para los tipos dando igual el tipo que sea, eso se añade despues
    const link2 = link + name;//se añade el tipo al link, para buscar el link completo del tipo que se ha pedido
    try {
        const response = await fetch(link2);
        const data: Type = await response.json();
        console.log("---------------------------------")
        console.log("Tipo: " , data.name)
        console.log("Generación: " , data.generation)
    } catch (error) {
      console.log(error);
    }
};
const num = prompt("Elige porfavor: \n(1).Buscar información sobre un tipo\n(2).Buscar información sobre un pokemon\n");
if(num === "1"){//Este me muestra la interfaz para el tipo
    const tipo = prompt("Escribe el nombre del tipo:");
    await fetchData2(tipo);//Llama a la funcion dedicada a este apartado pidiendo el nombre del tipo y ya en la funcion se añade al link
}
else if(num==="2"){//Este muestra para los pokemon
    const poke = prompt("Escribe el nombre de tu pokemon:");
    await fetchData(poke);//Llama a la funcion dedicada a este apartado pidiendo el nombre del pokemon y ya en la funcion se añade al link
}