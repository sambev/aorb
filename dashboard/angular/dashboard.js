var app = angular.module('dashboard', [])

app.factory('Widgets', function() {
    var Widgets = {};
    Widgets.data = [
        {
            title: 'Widget One',
            type: 'overview',
            content: 58
        },
        {
            title: 'Widget Two',
            type: 'overview',
            content: 34
        }
    ]
    return Widgets;
})

app.controller('widgetCtrl', function ($scope, Widgets) {
    $scope.widgets = Widgets;
    $scope.addOne = function(index) {
        Widgets.data[index].content++;
    };
    $scope.rmOne = function(index) {
        Widgets.data[index].content--;
    };
})

app.directive('widget', function() {
    return {
        restrict: 'E',
        template: '<h3>{{ widget.title }}</h3>\
            <p>{{ widget.type }}</p>\
            <p>{{ widget.content }}</p>\
            <button ng-click="addOne($index)">Add</button>\
            <button ng-click="rmOne($index)">Remove</button>'
    }
})

app.directive('widgetchart', function() {
    return {
        restrict: 'E',
        template: '<div class="bar" style="width:{{ widget.content }}0px">\
            {{ widget.title }} : {{ widget.content }}\
            </div>'
    }
})