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
     	 * @desc ordena formulario
     	 * @memberOf Flows
      	 */
    	
    	var num = vm.num;    


    	function order(num, $event){
    		
			vm.num = Number(keys.sort().join(''));
    	
    	}


    	/** 
		 * @function 
		 * @name KeyCode()
     	 * @desc valida la cantidad de press del teclado numerico
     	 * @memberOf Flows
      	 */

    	var keys = []

    	function KeyCode($event) {

    		/* evalua al eliminar números */
    	 	if($event.keyCode === 8) {
    	 		keys.splice(keys.length -1, 1);
    	 	} else {
    	 		/* evalua si fue presionado una vez */
	    	 	if(keys.indexOf($event.key) === -1) {
	    	 		keys.push($event.key);
	    	 	} else {
	    	 		/* setea ultimo arreglo correcto sin la tecla presionada */
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