angular.module('ajb.ice-nav', [])

.run(function ($templateCache) {
    $templateCache.put('ajb-iceNav.html', "\
        <div id=\"navigation-container\">\
            <div class=\"inner\">\
                <ul class=\"group-list\">\
                    <li class=\"group\" ng-repeat=\"group in groups\">\
                        <a class=\"name\">{{group.name}}<\/a>\
                        <table class=\"group-children-container\" cellpadding=\"{{getCellPadding(group)}}\" cellspacing=\"0\">\
                            <tr>\
                                <td ng-repeat=\"subGroup in group.subGroups\" ng-if=\"group.subGroups.length != 0\">\
                                    <ul class=\"child-list\"> <li class=\"sub-group-name\">{{subGroup.name}}<\/li>\
                                        <li class=\"child\" ng-repeat=\"item in subGroup.items\">{{item.name}}<\/li>\
                                    <\/ul>\
                                <\/td>\
                                <td ng-if=\"group.items.length != 0\">\
                                    <ul class=\"child-list\">\
                                        <li class=\"child\" ng-repeat=\"item in group.items\">{{item.name}}<\/li>\
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
            console.log(1)
        },
        scope: { tree: "="},
        template: "ajb-iceNav.html"
    }
})
