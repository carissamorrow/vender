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
          <img src="${product.img}" class= "image"/>
          <p>${product.name} - ${product.price} - ${product.quantity} </p>
          <button onclick="app.controllers.vendController.vendItem(${i})">BUY</button>
        </div>
        <button onclick="app.controllers.vendController.vendChange(${i})">Give Change</button>
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
    let template = "<p>You have Purchased</p>"
    if (item) {
      template += `<img src="${item.img}"/>`
    }
    document.getElementById("vended").innerHTML = template
  }
  vendChange(productIndex) {
    let item = vendService.vendItem(productIndex)
    let template = "<p> 0</p>"

    document.getElementById("change").innerHTML = template
  }
}
