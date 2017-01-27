(function(angular) {
	'use strict';

	angular		
		.module('ocLazyLoad.view', [])
		.config(config)
		
	config.$inject = ['$ocLazyLoadProvider'];		
	
	function config($ocLazyLoadProvider) {		
	
		$ocLazyLoadProvider.config({
			// debug: true,
			serie: true,
			modules: [
				{name: 'view.login', files: [
					'views/home/src/js/login.controller.js',
					'views/home/src/js/login.directive.js',
					'views/home/src/js/login.service.js',
					'views/home/src/login.module.js'
				], serie: true}
				
			]
		});
	}

}(angular));