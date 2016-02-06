import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ordersComponent from './orders.component';
import ordersService from './ordersService';
require('ng-table/dist/ng-table');
require('ng-table/dist/ng-table.css');


let ordersModule = angular.module('orders', [
  uiRouter,
  'ngTable'
])

.component('orders', ordersComponent)
.service({ordersService});

export default ordersModule;
