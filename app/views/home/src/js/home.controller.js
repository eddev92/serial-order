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


    	function order(num, $event){
    		
			vm.num = Number(keys.sort().join(''));
    	
    	}

    	var keys = []

    	function KeyCode($event) {

    	 	if($event.keyCode === 8) {// DELETE
    	 		keys.splice(keys.length -1, 1);
    	 	} else {

	    	 	if(keys.indexOf($event.key) === -1) {
	    	 		keys.push($event.key);
	    	 	} else {
	    	 		$timeout(function() {
	    	 			vm.num = Number(keys.join(''));
	    	 		})
	    	 	}
    	 	}
			       
    	};		
  

		/** 
		 * @function 
		 * @name initStates()
     	 * @desc Seteo de variables en el controllador
     	 * @memberOf Flows
      	 */
		
		function initStates(){
			vm.order = order;
			vm.num = num;
			vm.KeyCode = KeyCode;
			
		}

		
	}
	
})(angular);