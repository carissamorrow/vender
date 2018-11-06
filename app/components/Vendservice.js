import VendingMachine from "../models/VendMachine.js";
import VendFood from "../models/VendFood.js";

let vm = new VendingMachine(100, [
  new VendFood('fritos', 2, 1, "https://pics.drugstore.com/prodimg/595176/900.jpg"),
  new VendFood('Tab', .75, 1, "https://upload.wikimedia.org/wikipedia/commons/7/70/Tab_can.jpg"),
  new VendFood('Mt. Dew', 1, 1, "https://vignette.wikia.nocookie.net/mountaindew/images/9/90/Mountain-Dew-Can-17.png/revision/latest?cb=20170411162345")
])


export default class VendService {

  addQuarter() {
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