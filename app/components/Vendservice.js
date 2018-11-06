import VendingMachine from "../models/VendMachine.js";

let vm = new VendingMachine(100, [{
  name: 'Fritos',
  price: 1,
  quantity: 3
}, {
  name: 'Tab',
  price: .75,
  quantity: 10
}, {
  name: 'Mt. Dew',
  price: 1,
  quantity: 1
}])


export default class VendService {

  addQuarter() {
    console.log(2)
    vm.currentTransaction += .25
    return vm.currentTransaction
  }

  vendItem(productIndex) {

    let product = vm.products[productIndex]

    if (product && product.quantity > 0 && vm.currentTransaction >= product.price) {
      this.processTransaction(product)
      return JSON.parse(JSON.stringify(product))
    }
    return false
  }

  processTransaction(product) {
    product.quantity--
    vm.totalMoney += product.price
    vm.currentTransaction -= product.price
  }

  getProducts() {

    return JSON.parse(JSON.stringify(vm.products))
  }
}