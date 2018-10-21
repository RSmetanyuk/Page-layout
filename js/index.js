'use strict';
const booksArr = [
    {bookTitle: "Jewels of Nizam", bookAuthor: "Geeta Devi", bookRating: 9.8, bookPrice: 10.20, bookCover: "Jewels of Nizam.png", bookAdded: 1112121221222},
    {bookTitle: "Cakes & Bakes", bookAuthor: "Sanjeev Kapoor", bookRating: 9.9, bookPrice: 11.50, bookCover: "Cakes & Bakes.png", bookAdded: 1212155521222},
    {bookTitle: "Jamie’s Kitchen", bookAuthor: "Jamie Oliver", bookRating: 8.8, bookPrice: 9.50, bookCover: "Jamie’s Kitchen.png", bookAdded: 1212155521222},
    {bookTitle: "Inexpensive Family Meals", bookAuthor: "Simon Holst", bookRating: 8.1, bookPrice: 9.50, bookCover: "Inexpensive Family Meals.png", bookAdded: 1212155521222},
    {bookTitle: "Paleo Slow Cooking", bookAuthor: "Chrissy Gower", bookRating: 9.4, bookPrice: 9.50, bookCover: "Paleo Slow Cooking.png", bookAdded: 1212155521222},
    
    {bookTitle: "Cook Like an Italian", bookAuthor: "Tobie Puttock", bookRating: 8.3, bookPrice: 9.15, bookCover: "Cook Like an Italian.png", bookAdded: 1212155521222},
    {bookTitle: "Suneeta Vaswani", bookAuthor: "Geeta Devi", bookRating: 10, bookPrice: 9.50, bookCover: "Suneeta Vaswani.png", bookAdded: 1212155521222},
    {bookTitle: "Jamie Does", bookAuthor: "Jamie Oliver", bookRating: 8.1, bookPrice: 9.50, bookCover: "Jamie Does.png", bookAdded: 1212155521222},
    {bookTitle: "Jamie’s italy", bookAuthor: "Jamie Oliver", bookRating: 9.8, bookPrice: 9.50, bookCover: "Jamie’s italy.png", bookAdded: 1212155521222},
    {bookTitle: "Vegetables Cookbook", bookAuthor: "Matthew Biggs", bookRating: 7.4, bookPrice: 7.50, bookCover: "Vegetables Cookbook.png", bookAdded: 1212155521222}
];
 
const make_5_star_rating_from_0_to_10 = (rating) => {
    rating = Math.round(rating)
    let elem = '';
    for (let i = 0 ; i < 10; i+=2) {
        if (i < rating) {
            if (i + 1 < rating) {
                elem += '<img alt="" src="img/star2.png" />'
            } else {
                elem += '<img alt="" src="img/star1.png" />'
            }
        } else {
            elem += '<img alt="" src="img/star0.png" />'
        }
    }
    return elem;
};

const makeBooksHtmlContent = () => {
    let content = '';
    for (let i = 0 ; i < booksArr.length; i++) {
        content += 
            '<div class=book>' +
                '<a href="#"><img class="book__logo" src="img/books/' + booksArr[i].bookCover + '"></a>' +
                '<a href="#"><p class="book__title">' + booksArr[i].bookTitle + '</p></a>' +
                '<p class="book__author">by <a href="#"><span class="book__author-name">' + booksArr[i].bookAuthor + '</span></a></p>' +
                '<div class="book__rating"><a href="#">' + make_5_star_rating_from_0_to_10(booksArr[i].bookRating) + '</a></div>' +
            '</div>'
    }
    document.getElementsByClassName("content-window")[0].innerHTML = content;
    
};

makeBooksHtmlContent();