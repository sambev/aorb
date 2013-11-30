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

function widgetCtrl($scope, Widgets) {
    $scope.widgets = Widgets;
    $scope.addOne = function(index) {
        Widgets.data[index].content++;
    }
}