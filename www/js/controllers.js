'use strict';

angular.module('mobistore.controllers', [])

  .controller('TabCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$ionicHistory', 'Util', 'HomeOpt', function($rootScope, $scope, $location, $timeout, $ionicHistory, Util, HomeOpt) {
//	  $scope.goHome = function() {
//		  $location.path('/tab/home');
//	  }
  }])

  .controller('HomeCtrl', ['$scope', '$state', '$location', '$timeout', '$ionicHistory', 'Util', 'HomeOpt', 'ProductMdl', 'ProductOpt', 
                           function($scope, $state, $location, $timeout, $ionicHistory, Util, HomeOpt, ProductMdl, ProductOpt) {

	  $scope.resize = function() {
		  $scope.platform = ionic.Platform.platform();
	    var width = Util.getScreenSize().w;
	    var height = width * 0.57;
	    $scope.styleSlideHeight = {'height':height + 'px', 'width': width + 'px'};
	  };
	  $scope.resize();
	  
 	 HomeOpt.opt({act: 'index'},function(json) {
     	console.log(json);
     	$scope.categories = json.categories;
     	$scope.adverts = json.adverts;
     	$scope.products = json.products;
     	
   	});
 	 
	  window.addEventListener("orientationchange", function() {
		　　$scope.resize();
	  }, false)
	  
	  if (!$scope.init) {
		  $scope.menuShow = false;$scope.categories
	      $scope.showMenu = function() {
	          $scope.menuShow = !$scope.menuShow;
	          
	      };

	      $scope.showCategory = function(item) {
	    	  console.log(item.id);
	    	  $location.path('/tab/category/' + item.id + '/products');
	    	  $scope.menuShow = false;
	      };
	  	 
	  	$scope.init = true;
	  }
	  
	  $scope.showProdcut = function(item) {
		  $location.path('/tab/product/'+ item.id);
	  };
  }])
  
  	.controller('CategoryCtrl', ['$scope', '$state', 'Util', 'ProductMdl', 'CategoryOpt', function($scope,  $state, Util, ProductMdl, CategoryOpt) {
  		var categoryId = $state.params.categoryId;
	  CategoryOpt.opt({act:'listProduct', categoryId: categoryId}).$promise.then(function(json) {
		  console.log(json);
		  $scope.productsIn = json.data;
	  });
	}])
  
  .controller('ProductCtrl', ['$scope', '$state', 'Util', 'ProductMdl', 'ProductOpt', function($scope,  $state, Util, ProductMdl, ProductOpt) {
	  
	  var productId = $state.params.productId;
	  ProductMdl.get({id: productId}).$promise.then(function(vo) {
		  console.log(vo);
		  $scope.product = vo;
	  });
	  
//	    // 查找
//	    ProductMdl.get({ id: '1'}).$promise.then(function(p1) {
//	        console.log(p1);
//	        
//	        // 新增
//	        p1.id = '';
//	        ProductMdl.save(p1).$promise.then(function(p2) {
//	        	console.log(p2);
//	        	
//	        	// 更新
//	        	p2.name += '=';
//	        	ProductMdl.save(p2).$promise.then(function(p3) {
//		        	console.log(p3);
//		        	
//		        	// 查询
//		        	ProductMdl.query({'startIndex': 0},function (ls) {
//		      	      console.log(ls);
//		      	      	
//		      	      	// 信息
//			      	  	ProductOpt.opt({act: 'doSomething', 'param': 'test'},function(json) {
//			      	  		console.log(json);
//				      	});
//		      	  	});
//		        });
//	        });
//	        
//	    });

  }])

  .controller('FindCtrl', function($scope) {
    var i = 0;
  })
  .controller('ShoppingcartCtrl', function($scope) {
    var i = 0;
  })
  .controller('MineCtrl', function($scope) {
    var i = 0;
  });
