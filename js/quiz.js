angular.module('ui.bootstrap.demo').controller('ModalQuizCtrl', function ($scope, $modal, $log) {
    $scope.totalItems = 148;
    $scope.itemsPerPage = 1;
    //$scope.currentPage = 1;

    $scope.pageChanged = function(){
      //console.log($scope.currentPage);
      var modalInstance = $modal.open({
        templateUrl: 'quiz/'+$scope.currentPage+'.html',
        controller: 'ModalQuizInstanceCtrl'
      });
    }

    $scope.selectPage = function(){
      console.log("x");
    }
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalQuizInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.click = function($event){
      $scope.class = "Qactive";
  };

}).directive("myTest", function () {
  return function (scope, element, attrs) {
    element.addClass("quiz_choice");
    element.bind("click", function () {
      if(!element.hasClass("Qactive") && attrs.ngCorrect == undefined)
        element.addClass("Qactive");
      else if(!element.hasClass("QWactive") && attrs.ngCorrect !== undefined){
        attrs.ngRom = element.text();
        element.addClass("QWactive");
        element.html(attrs.ngCorrect);
      }else{
        element.removeClass("Qactive");
        element.removeClass("QWactive");
        element.html(attrs.ngRom);
      }
    });
  };
});