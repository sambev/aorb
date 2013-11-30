var App = {
    Models: {},
    Views: {},
}

/*

 */
App.Models.DashboardModel = Backbone.Model.extend({
    defaults: {
        title: 'Widget',
        type: 'overview',
        content: '',
    },
});


App.Views.WidgetView = Backbone.View.extend({
    parent_container: $('#dashboard_container'),
    template: _.template($('#widget').html()),

    initialize: function() {
        this.el = '#widget' + this.id;
        this.model.bind('change', this.render, this);
        this.render();
        this.parent_container.append(this.$el);
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
    },

    events: {
        'click button[class=add]': 'addContent',
    }, 

    addContent: function() {
        this.model.set('content', this.model.get('content') + 1);
    }
});


$(function() {
    App.WidgetOne = new App.Models.DashboardModel({
        id: 1,
        title: 'Widget One',
        type: 'overview',
        content: 58
    });

    App.WidgetTwo = new App.Models.DashboardModel({
        id: 2,
        title: 'Widget Two',
        type: 'overview',
        content: 58
    });

    App.ViewOne = new App.Views.WidgetView({ model:App.WidgetOne });
    App.ViewTwo = new App.Views.WidgetView({ model:App.WidgetTwo });
});