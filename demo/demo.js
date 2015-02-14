angular.module('ajb.ice-nav-demo', ['ajb.ice-nav'])

.controller('NavigationController', function ($scope) {
    $scope.groups = [
        {
            "id":1,
            "name":"Group 1",
            "link":"\/",
            "subGroups":[

            ],
            "items":[
                {
                    "id":2,
                    "link":"somelink",
                    "name":"Item 1"
                },
                {
                    "id":3,
                    "link":"somelink",
                    "name":"Item 2"
                },
                {
                    "id":4,
                    "link":"somelink",
                    "name":"Item 3"
                },
                {
                    "id":5,
                    "link":"somelink",
                    "name":"Item 4"
                },
                {
                    "id":6,
                    "link":"somelink",
                    "name":"Item 5"
                }
            ]
        },
        {
            "id":2,
            "name":"Group 2",
            "link":"somelink",
            "subGroups":[
                {
                    "id":8,
                    "name":"Sub Group 1",
                    "link":"somelink",
                    "subGroups":[

                    ],
                    "items":[
                        {
                            "id":7,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 1"
                        },
                        {
                            "id":8,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 2"
                        },
                        {
                            "id":9,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 3"
                        },
                        {
                            "id":10,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 4"
                        },
                        {
                            "id":11,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 5"
                        },
                        {
                            "id":12,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 6"
                        },
                        {
                            "id":13,
                            "link":"somelink",
                            "name":"Sub Group 1 Item 7"
                        }
                    ]
                },
                {
                    "id":9,
                    "name":"Sub Group 2",
                    "link":"somelink",
                    "subGroups":[

                    ],
                    "items":[
                        {
                            "id":14,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 1"
                        },
                        {
                            "id":15,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 2"
                        },
                        {
                            "id":16,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 3"
                        },
                        {
                            "id":17,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 4"
                        },
                        {
                            "id":18,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 5"
                        },
                        {
                            "id":19,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 6"
                        },
                        {
                            "id":20,
                            "link":"somelink",
                            "name":"Sub Group 2 Item 7"
                        }
                    ]
                }
            ],
            "items":[

            ]
        },
        {
            "id":3,
            "name":"Group 3",
            "link":"somelink",
            "subGroups":[

            ],
            "items":[

            ]
        },
        {
            "id":4,
            "name":"Group 4",
            "link":"somelink",
            "subGroups":[

            ],
            "items":[

            ]
        },
        {
            "id":5,
            "name":"Group 5",
            "link":"somelink",
            "subGroups":[

            ],
            "items":[

            ]
        },
        {
            "id":6,
            "name":"Group 6",
            "link":"somelink",
            "subGroups":[

            ],
            "items":[

            ]
        }
    ]
})
