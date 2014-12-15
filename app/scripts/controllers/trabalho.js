'use strict';

/**
 * @ngdoc function
 * @name nerdgradeApp.controller:TrabalhoctrlCtrl
 * @description
 * # TrabalhoctrlCtrl
 * Controller of the nerdgradeApp
 */
angular.module('nerdgradeApp')
  .controller('TrabalhoctrlCtrl',['$window','$scope', function ($window, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     this.traba = {};
     this.novo = '-';
     this.valorSel={};
     this.valores = [
     {texto:'0',n:0},
     {texto:'1',n:1},
     {texto:'2',n:2},
     {texto:'3',n:3},
     {texto:'4',n:4},
     {texto:'5',n:5},
     {texto:'6',n:6},
     {texto:'7',n:7},
     {texto:'8',n:8},
     {texto:'9',n:9},
     {texto:'10',n:10},
     {texto:'11',n:11},
     {texto:'12',n:12},
     {texto:'13',n:13},
     {texto:'14',n:14},
     {texto:'15',n:15},
     {texto:'16',n:16},
     {texto:'17',n:17},
     {texto:'18',n:18},
     {texto:'19',n:19},
     {texto:'20',n:20}
     ];
    this.getTestes= function(aluno){
			
			return aluno.trabalhos;
		};	

	this.addTestes= function(a){
		var count = Object.keys(a.trabalhos).length;
		$window.alert('tr1- ' + a[0] + '  tr2- ' + a[1] + 'tasmanha='+ count);
		
		count = Object.keys(a.trabalhos).length;
		$window.alert('tr1- ' + a[0] + '  tr2- ' + a[1] + 'tasmanha='+ count);
		console.log(a.trabalhos);
		this.novo=this.valorSel.n;
		a.trabalhos.push(this.novo);
		this.traba =a.trabalhos;
		console.log(this.traba);
		
	};	

  }]);
