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
     	 * @desc ordena y valida la cantidad maxima del numero ingresado en el formulario
     	 * @memberOf Flows
      	 */
    	
    	var num = vm.num;

    	function order(num){

    		
    		num = vm.num;

    		if(num >= 0 && num < 9999999999){

    		console.log("el numero existe")    

    		}
    		else{
    			console.log("Existe un numero repetido")
    		
    		}
    		// alert(num);
    	
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