/**
 * Clase principal de la aplicación en donde se muestra todas las dependencias del
 * proyecto y el ngRouter para la navegabilidad del mismo.
 *
 * Capa de Principal de Aplicación.
 *
 * @author Edward Llanca Haro (edwarllanca@hotmail.com)
 *
 */

 (function (angular){
 	'use strict';

 	/**
	 * Módulo principal de
	 * inyeccion de
	 * core, components y routes
	 * que unifican la app
	 */	 
	angular
	 	.module('ordenador', [	
	 			'module.third.parties', 			
	 			'module.core',
	 			'routes',
	 			])

	 	.config(appConfig)
	 	.run(appRun)

	 	appConfig.inject = [];

	 	function appConfig(){
	 		console.log("its Works");
	 	}

	 	appRun.inject = [];

	 	function appRun(){

	 		console.log("its Works");

	 	}

 })(angular);