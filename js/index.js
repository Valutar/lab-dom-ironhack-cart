// ITERATION 1

  // put 2 var. price and quantity
  function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    const multi = price * quantity
    product.querySelector('.subtotal span').innerText = multi;
    return multi
  }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalSum = 0;
  for (let product of allProducts){
    // updateSubtotal(product);
    totalSum += updateSubtotal(product)
  }
  document.querySelector('#total-value').innerText = `Total: $ ${totalSum}`;
  
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
function createProduct() {
  let newProduct = document.querySelector('.create-product input[type="text"]').value;
  let newProductPrice =document.querySelector('.create-product input[type="number"]').value;
  let productTable =document.querySelector('tbody');
  
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = 
  `<td class="name">
  <span>${newProduct}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`
  productTable.appendChild(newRow)
  calculateAll()
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const newProduct = document.getElementById ('create');
  newProduct.addEventListener('click', createProduct);
});
