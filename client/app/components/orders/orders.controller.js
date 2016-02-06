class OrdersController {
  constructor(ordersService, NgTableParams) {
    this.name = 'orders';
    this.ordersService = ordersService;
    this.order = {};
    this.creatingOrder = false;
    var dataset = [{name: "Moroni", age: 50} /*,*/];
    self.tableParams = new NgTableParams({}, {
      dataset: dataset
    });
  }

  showCreateOrder() {
    this.creatingOrder = true;
  }

  getClients(){
    return this.ordersService.getClients();
  }
}

OrdersController.$inject = [ 'ordersService', 'NgTableParams' ];
export default OrdersController;
