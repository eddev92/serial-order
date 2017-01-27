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
				{name: 'view.home', files: [
					'views/home/src/js/home.controller.js',
					'views/home/src/home.module.js'
				], serie: true}
				
			]
		});
	}

}(angular));