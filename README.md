# ice-nav
Angular JS navigation bar

![alt tag](https://raw.githubusercontent.com/andrejbranch/ice-nav/master/demo/screenshot_2.png)
![alt tag](https://raw.githubusercontent.com/andrejbranch/ice-nav/master/demo/screenshot_1.png)
![alt tag](https://raw.githubusercontent.com/andrejbranch/ice-nav/master/demo/screenshot_3.png)

Installation
------------
Install with bower

    bower install ice-nav --save

include ice-nav.js then add as module dependency

    angular.module('myApp', [ajb.ice-nav])

Usage
------------

Ice nav takes a strict json format for your groups and subgroups

  ```js
    $scope.groups = [
      {
        "name":"Group 1",
        "items": [
          {"name": "Item 1"},
          {"name": "Item 2"}
        ],
        "subGroups": []
      },
      {
        "name": "Group 2",
        "items": [],
        "subGroups": [
          {
            "name": "Sub Group 1 Item 1"
          },
          {
            "name": "Sub Group 2 Item 2"
          }
        ]
      }
    ]
  ```

Now in your template you can use the ice nav bar like this
  ```html
    <ice-nav groups="groups"></ice-nav>
  ```
