type Libro = {
    id: string|null, //los pongo null, por que sino me salta error al crearlo diciendo que también podrian ser null los datos cuando los pido
    title: string|null,
    author: string|null,
    pages: string|null,
    genre: string|null,
}

let libros: Libro[] = []; //No lo he hecho const porque sino la parte de borrar un libro no podria hacerla ya que no puedo alterarlo con la funcion que he usado y no se me ocurria otra forma

while(1){
    console.log("-----------------------");
    const num = prompt("Eligen una opcion: \n(1)Crear libro\n(2)Filtrar libro por genero\n(3)Borrar libro\n(4)Salir\n");//Hago un menu con las 4 opciones que hay
    console.log("-----------------------");
    if(num==="1"){//Esta es la opcion de crear un libro 
        let i = prompt("Escribe la id del libro: ");//primero pido el id
        while(libros.some(e => e.id === i)){//aqui compruebo que en la lista de libros no haya ninguno con ese id, ya que pone que sea un id unico sin repetir
            i = prompt("Ese id ya esta en uso, escriba otro: ");
        }
        const titl = prompt("Escribe el titulo del libro: ");//escribo el titulo del nuevo libro y los siguientes datos
        const auth =prompt("Escribe el autor del libro: ");
        const page = prompt("Escribe el numero de paginas que tiene el libro: ");
        const genr = prompt("Escribe el genero literario del libro: ");
        const libro: Libro = { //creo un libro, el cual tiene los datos anteriormente dados
            id : i, 
            title : titl, 
            author : auth, 
            pages : page, 
            genre : genr,
        };
        libros.push(libro); //meto el libro creado en el array de libros
    }
    if(num==="2"){
        const genero = prompt("Escribe el genero que quieres buscar: ");
        const filtro = libros.filter((e => e.genre === genero));
        if(filtro.length < 1){
            console.log("No hay ningun libro con ese genero literario");
        }else{
            console.log("Los libros del genero ", genero, " son: ")
            filtro.forEach((e)=>console.log("-Id: ",e.id,". Titulo: ",e.title,". Autor: ",e.author,". Paginas: ",e.pages,". Genero: ", e.genre))
        }
    }
    if(num==="3"){
        const borrar = prompt("Escribe el id del libro que quieres eliminar de la lista: ");
        if(libros.some(e=>e.id === borrar) === false){
            console.log("No hay ningun libro con ese id para borrar");
        }else{
            libros = libros.filter((e)=> e.id!=borrar);
            console.log("Lista de libros nueva:");
            libros.forEach((e)=>console.log("-Id: ",e.id,". Titulo: ",e.title,". Autor: ",e.author,". Paginas: ",e.pages,". Genero: ", e.genre))

        }
    }
    if(num==="4"){
        break;
    }
}
