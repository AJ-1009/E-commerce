// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function fetchItems() {
  fetch("https://dummyjson.com/products/")
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error))
    .then((response) => {
      return (response.products);
    })
    .catch((error) => console.log(error));
}
