'use strict';
const booksArr = [
    {bookTitle: "Jewels of Nizam", bookAuthor: "Geeta Devi", bookRating: 10, bookPrice: 10.20, bookCover: "img/books/Jewels of Nizam.png", bookAdded: 1112121221222},
    {bookTitle: "Cakes & Bakes", bookAuthor: "Sanjeev Kapoor", bookRating: 10, bookPrice: 11.50, bookCover: "img/books/Cakes & Bakes.png", bookAdded: 1212155521222}
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
    document.getElementsByClassName("book__rating")[0].innerHTML = elem;
    //console.error(elem);
};
  
//make_5_star_rating_from_0_to_10(0.6);