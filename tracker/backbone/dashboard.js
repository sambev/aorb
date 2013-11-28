var App = {
    Models: {},
    Views: {},
    Collections: {},
}

App.Models.DashboardModel = Backbone.Model.extend({
    defaults: {
        title: 'Widget',
        type: 'overview',
        content: '',
    },

    initialize: function () {
        console.log('model ' + this); 
    }
});

App.Views.DashboardView = Backbone.View.extend({
    el: '#dashboard_container',
    template: _.template($('#widget_template').html()),

    initialize: function() {
        console.log(this.model);
        this.model.bind('change', this.render, this);
        this.render();
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
    }
});

$(function() {
    App.WidgetOne = new App.Models.DashboardModel({
        title: 'Widget One',
        type: 'overview',
        content: '58'
    });

    App.WidgetTwo = new App.Models.DashboardModel({
        title: 'Widget Two',
        type: 'overview',
        content: '58'
    });

    App.ViewOne = new App.Views.DashboardView({
        model: App.WidgetTwo,
    })
});