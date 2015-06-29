'use strict'; 

//Requires bundles

require('./../public/vendor/angularjs/angular');
require('./directives/events');

var app = angular.module('Bootstrap', ['Events']);

//Run application
angular.element(document).ready(function(){
	angular.bootstrap(document,['Bootstrap']);
});