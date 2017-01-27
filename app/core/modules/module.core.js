/**
 * ModulesCore Core
 * @namespace Core
 * @author Edward Llanca Haro (edwarllanca@hotmail.com)
 */

 (function(angular) {
 	'use strict';

 	angular
 		.module('module.core', [
			'core.constants',
			'ocLazyLoad.view'			
 		]);

 }(angular));