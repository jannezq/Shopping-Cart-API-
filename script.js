window.onload = () => {
  showBooks();
};

const cardRow = document.querySelector(".booksArea");
const showBooks = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const booksData = await response.json();
    console.log(booksData);
    const booksArray = booksData;
    booksArray.forEach((singleBook) => {
      cardRow.innerHTML += `
      <div id="${singleBook.asin}" class="d-flex col-3 mb-3">
            <div class="card w-100">
                <img src="${singleBook.img}" class="card-img-top"  width="100px" height="350px">
                <div class="card-body d-flex flex-column justify-content-between align-content-center">
                    <h5 class="card-title">${singleBook.title}</h5>
                    <span  class="card-text rounded-pill text-center mb-2">€${singleBook.price}</span>
                    <a href="#" class="btn btn-primary" style="background-color: purple;border-color:transparent" onclick="addToCart(${singleBook.asin})">Add to cart</a>
                </div>
            </div>
        </div>
        `;

      // booksArray.map((singleBook) => {
      // return `
      // <div id="${singleBook.asin}" class="d-flex col-3 mb-3">
      //       <div class="card w-100">
      //           <img src="${singleBook.img}" class="card-img-top"  width="100px" height="350px">
      //           <div class="card-body d-flex flex-column justify-content-between align-content-center">
      //               <h5 class="card-title">${singleBook.title}</h5>
      //               <span  class="card-text rounded-pill text-center mb-2">€${singleBook.price}</span>
      //               <a href="#" class="btn btn-primary" style="background-color: purple;border-color:transparent" onclick="addToCart(${singleBook.asin})">Add to cart</a>
      //           </div>
      //       </div>
      //   </div>
      //   `;
    });
    // const stringOfBooks = booksArray.join("");
    // // console.log(stringOfBooks);
    // cardRow.innerHTML = stringOfBooks;
  } catch (err) {
    console.log(err);
  }
};

const addToCart = (asin) => {
  console.log(asin);
  let cartContainer = document.getElementById("#book-cart-container");
  let idBookCart = asin;
};
