import VendController from './components/VendController.js'

class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

window.app = new App()