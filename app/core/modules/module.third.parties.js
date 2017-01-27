/**
 * ModulesThirdParties Core
 * @namespace Core
 * @author Edward Llanca Haro (edwarllanca@hotmail.com)
 */

  (function(angular) {
 	'use strict';

 	angular
 		.module('module.third.parties', [
 			'ui.router',
 			'oc.lazyLoad',
 			'ui.bootstrap'
		]);

 }(angular));