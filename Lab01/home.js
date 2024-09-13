const renderProduct = (data) => {
  const product = document.createElement("div");
  product.className = "product";
  const image = document.createElement("img");
  image.src = data.src;
  const name = document.createElement("div");
  name.textContent = data.name;
  const price = document.createElement("div");
  price.textContent = data.price;
  product.append(image);
  product.append(name);
  product.append(price);
  return product;
};

const init = () => {
  const products = document.getElementById("products");
  console.log(products);

  [1, 2].forEach(() => {
    const product = renderProduct({
      image:
        "https://bizweb.dktcdn.net/thumb/2048x2048/100/069/071/themes/895058/assets/slider_1.jpg?1697775911374",
      name: "test",
      price: "2000",
    });
    products.append(product);
  });
};
$(document).ready(function () {
  init();
});
