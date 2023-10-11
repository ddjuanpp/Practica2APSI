export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Quotes[];
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

type Quotes = {
    quoteText : string
    quoteAuthor : string
    quoteGenre : string
}


const fetchData = async (current_Page) => {
    const link = "https://quote-garden.onrender.com/api/v3/quotes?page="; //Esto me lo explicó usted como poner en el link la pagina, el añadirlo ya lo he hecho por mi cuenta
    const link2 = link + current_Page;
    try {
        // Fetch a resource from the network. It returns a Promise
        // that resolves to the Response to that Request, whether it is successful or not.
        const response = await fetch(link2);
      
        // Takes a Response stream and reads it to completion. It returns a promise that resolves
        // with the result of parsing the body text as JSON.
        const data: ResponseData = await response.json();
      
        console.log("Status:",data.statusCode);
        data.data.forEach(quote => {
            console.log("---------------------------------")
            console.log("Author: ",quote.quoteAuthor);
            console.log("Text: ",quote.quoteText)
            console.log("Age: ", quote.quoteGenre)
        })
    } catch (error) {
        // Debemos tratar siempre los errores cuando trabajemos con Promesas
        console.log(error);
    }
};
await fetchData(1);
await fetchData(2);
await fetchData(3);