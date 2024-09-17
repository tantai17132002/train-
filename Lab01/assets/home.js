const renderProduct = (data) => {
  const product = document.createElement("div");
  product.className = "product";

  const image = document.createElement("img");
  image.src = data.image; // Change src to image

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = data.name;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = data.price;

  product.append(image, name, price);
  return product;
};

const init = () => {
  const products = document.getElementById("products");

  // List of products with different photos and prices
  const productData = [
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/tg.png?v=1512029445597",
      name: "Căn hộ 2PN tại Pearl Plaza",
      price: "250.000.000₫",
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/rge-b994e80f-21ee-45ef-acbd-621b3371c0e4.png?v=1512029796233",
      name: "Căn hộ 3PN ở Pearl Plaza",
      price: "3.000.000.000₫",
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/ss.png?v=1512029733193",
      name: "Bán căn hộ SSG Tower 3PN",
      price: "3.300.000.000₫",
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/8.jpg?v=1458792918940",
      name: "Bán căn hộ SSG Tower 2 PN",
      price: "3.000.000.000₫",
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/16.jpg?v=1458793722490",
      name: "Nhà phố đẹp 3 tầng khắc phục nắng hướng tây",
      price: "4.100.000.000₫",
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/fgre.png?v=1512029420260",
      name: "Nhà đẹp 2 tầng với thiết kế gần gũi thiên nhiên",
      price: "5.000.000.000₫",
    },
  ];

  // Show each product
  productData.forEach((data) => {
    const product = renderProduct(data);
    products.append(product);
  });
};

$(document).ready(function () {
  init();
});
