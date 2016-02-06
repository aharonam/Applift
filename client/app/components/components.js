import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Header from './header/header';
import Orders from './orders/orders';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Header.name,
  Orders.name
]);

export default componentModule;
