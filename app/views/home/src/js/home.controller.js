/**
 * AuthenticationController Flows
 * @namespace Flows
 * @author Edward Llanca Haro (edwarllanca@hotmail.com)
 */
(function(angular) {  
	'use strict';

	angular
	    .module('home.view.controller', [])
		.controller('homeController', homeController);

	homeController.$inject = [	
		'$timeout'
	];
	
	/** 
     * @desc (Insertar Descripcion)
     * @memberOf Flows
     */
	function homeController(	
		$timeout
	) {
		
		var vm = this;

		init();

		/** 
		 * @function 
		 * @name init()
     	 * @desc Inicializacion de funciones inicio
     	 * @memberOf Flows
      	 */

		function init(){
			initStates();
		}  
    
    	function order(){
    		alert("el numero ordenado es :");
    	}


		/** 
		 * @function 
		 * @name initStates()
     	 * @desc Setep de variables en el controllador
     	 * @memberOf Flows
      	 */
		
		function initStates(){
			vm.order = order;
		}

		
	}
	
})(angular);