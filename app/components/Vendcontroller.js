import VendService from "./VendService.js";

let vendService = new VendService()


function drawTotal(val) {
  document.getElementById('change').innerText = val
}


function drawProducts() {

  let products = vendService.getProducts()
  let template = ''

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.quantity > 0) {
      template += `
        <div>
          <p>${product.name} - ${product.price}</p>
          <button onclick="app.controllers.vendController.vendItem(${i})">BUY</button>
        </div>
      `
    }
  }
  document.getElementById('products').innerHTML = template
}

export default class VendController {
  constructor() {

    drawProducts()
  }
  addQuarter() {
    let total = vendService.addQuarter()

    drawTotal(total)
  }
  vendItem(productIndex) {

    let item = vendService.vendItem(productIndex)

  }
}
