async function getProduct() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products/15");
      const product = await response.json();
      console.log(product);
    } catch (error) {
      console.error("Ошибка при загрузке продукта:", error);
    }
  }
  
  getProduct();
  