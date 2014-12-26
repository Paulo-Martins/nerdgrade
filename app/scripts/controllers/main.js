'use strict';

/**
 * @ngdoc function
 * @name nerdgradeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nerdgradeApp
 */
angular.module('nerdgradeApp')
  .controller('MainCtrl',['$window','$scope', function ($window,$scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.nota='';
    this.alunos =
	[
	   { numero: '1',
	    nome: 'Paulo Jose Abreu Martins',
	    testes: [12,2],
	    trabalhos: [{nota:10},{nota:20
	    },{nota:19}]
  },
	{
		numero: '2',
		nome: 'Pedro Jose Abreu Martins',
		testes: [5,5],
		trabalhos: [{nota:1},{nota:2
	    }]
	}
];
	this.calculaMedia= function(t){
		var nota = (t[0] + t[1])/2;
		if(nota<6)
			{	
				this.nota='text-danger';
			}
			else{
				this.nota='';
			}
		return (t[0] + t[1])/2;
	};

	this.checkMedia= function(t){

			var nota = (t[0] + t[1])/2;
			if(nota<6)
				{	
					return true;
				}
				else{
					return false;
				}
			
		};

	this.teste = function(){

			$window.alert('ola');
			
		};

	
  }]);
