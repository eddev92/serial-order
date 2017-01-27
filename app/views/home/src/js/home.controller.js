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
		'$scope',
		'$timeout'
	];
	
	/** 
     * @desc (Insertar Descripcion)
     * @memberOf Flows
     */
	function homeController(
		$scope,	
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

		/** 
		 * @function 
		 * @name order()
     	 * @desc ordena el numero ingresado en el formulario
     	 * @memberOf Flows
      	 */
    	
    	var num = vm.num;

    	function order(){
    		
    		num = vm.num;

    		console.log(num)
    		
    		
    	}

		/** 
		 * @function 
		 * @name initStates()
     	 * @desc Seteo de variables en el controllador
     	 * @memberOf Flows
      	 */
		
		function initStates(){
			vm.order = order;
			vm.num = num;
			
		}

		
	}
	
})(angular);