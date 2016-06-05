angular.module('NE.StatusController', ['NE.wsFactory','NE.currencyFactory','NE.statusFactory']) //instantiates
.controller('StatusController', ['$scope','$rootScope','wsFactory','currencyFactory', 
function($scope,$rootScope,wsFactory,currencyFactory){ 
 
 $scope.s = wsFactory.ws; 
 console.log($scope.s);
 $scope.getCF = currencyFactory.getCF();
 
 


}])
.controller('StatusPageController',['$scope','statusFactory','currencyFactory', 
function($scope,statusFactory,currencyFactory){


$scope.cf = currencyFactory.getCF();
$scope.convertCurrency = currencyFactory.convertCurrency;
statusFactory.getStatusInfo().then(function(result){
    $scope.data = result.data;    

        $scope.posPercent = parseFloat((((result.data.posInt) / (result.data.heightInt))*100).toFixed(1));
        $scope.powPercent = parseFloat((((result.data.powInt) / parseInt(result.data.heightInt))*100).toFixed(1));

        $scope.dayPOSPercent = parseFloat((((result.data.dayPOSInt) / parseInt(result.data.dayBlocksInt))*100).toFixed(1));
        $scope.dayPOWPercent = parseFloat((((result.data.dayPOWInt) / parseInt(result.data.dayBlocksInt))*100).toFixed(1));
});

}]);
