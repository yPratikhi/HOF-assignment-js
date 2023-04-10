const myBooks=[
    {title: "Book1", author: "author1", year: 2009},
    {title: "Book2", author: "author2", year: 2010},
    {title: "Book3", author: "author3", year: 2011},
    {title: "Book4", author: "author4", year: 2012},
]

const result = myBooks.filter(book => book.year >=2010).map(book => {
    return{
        title:book.title,
        author:book.author.toUpperCase(),
    }
})
console.log(result);



