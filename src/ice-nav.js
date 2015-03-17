angular.module('ajb.ice-nav', [])

.run(function ($templateCache) {
    $templateCache.put('ajb-iceNav.html', "\
        <div id=\"ice-nav-container\">\
            <div class=\"inner\">\
                <ul class=\"group-list\">\
                    <li class=\"group\" ng-repeat=\"group in groups\" ng-if=\"shouldShow(group)\">\
                        <a class=\"name\">{{group.name}}<\/a>\
                        <table class=\"group-children-container\" cellpadding=\"{{getCellPadding(group)}}\" cellspacing=\"0\">\
                            <tr>\
                                <td ng-repeat=\"subGroup in group.subGroups\" ng-if=\"group.subGroups.length != 0\" ng-if=\"shouldShow(subGroup)\">\
                                    <ul class=\"child-list\"> <li class=\"sub-group-name\">{{subGroup.name}}<\/li>\
                                        <li ng-click=\"onClick(item)\" class=\"child\" ng-repeat=\"item in subGroup.items\" ng-if=\"shouldShow(item)\">\
                                            <a>{{item.name}}<\/a>\
                                        <\/li>\
                                    <\/ul>\
                                <\/td>\
                                <td ng-if=\"group.items.length != 0\">\
                                    <ul class=\"child-list\">\
                                        <li ng-click=\"onClick(item)\" class=\"child\" ng-repeat=\"item in group.items\" ng-if=\"shouldShow(item)\">\
                                            <a>{{item.name}}<\/a>\
                                        <\/li>\
                                    <\/ul>\
                                <\/td>\
                            <\/tr>\
                        <\/table>\
                    <\/li>\
                <\/ul>\
            <\/div>\
        <\/div>\
    ")
})

.directive('iceNav', function () {
    return {
        restrict: 'E',
        link: function ($scope, element, attrs) {

            $scope.getCellPadding = function (group) {
                return group.subGroups.length != 0 ? 10 : 0
            }

            $scope.onClick = function (item) {
                window.location = item.link
            }

            $scope.shouldShow = function (group) {

                if (typeof $scope.isHidden == 'function') {
                    return !$scope.isHidden(group)
                }

                return true
            }

            if ($scope.fade) {
                element.find('#ice-nav-container').addClass('fade')
            }
        },
        scope: { groups: "=", isHidden: "=", fade: "=" },
        templateUrl: "ajb-iceNav.html",
    }
})
