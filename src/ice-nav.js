angular.module('ajb.ice-nav', [])

.directive('iceNav', function () {
    return {
        restrict: 'E',
        link: function ($scope, element, attrs) {
            console.log(1)
        }
    }
})
