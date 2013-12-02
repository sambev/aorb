var App = {
    Models: {},
    Views: {},
}

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
        this.model.bind('change', this.render, this);
        this.parent_container.append(this.$el);
        this.render();
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
    },

    events: {
        'click .addOne': 'addContent',
        'click .rmOne': 'rmContent',
    }, 

    addContent: function() {
        this.model.set('content', this.model.get('content') + 1);
    },

    rmContent: function() {
        this.model.set('content', this.model.get('content') - 1);
    }
});

App.Views.ChartView = Backbone.View.extend({
    parent_container: $('#charts'),
    template: _.template($('#chart_bar').html()),

    initialize: function() {
        this.model.bind('change', this.render, this);
        this.parent_container.append(this.$el);
        this.render();
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
    },
})


$(function() {
    WidgetOne = new App.Models.DashboardModel({
        id: 1,
        title: 'Widget One',
        type: 'overview',
        content: 37
    });

    WidgetTwo = new App.Models.DashboardModel({
        id: 2,
        title: 'Widget Two',
        type: 'overview',
        content: 58
    });

    ViewOne = new App.Views.WidgetView({ model:WidgetOne });
    ViewTwo = new App.Views.WidgetView({ model:WidgetTwo });
    BarOne = new App.Views.ChartView({ model:WidgetOne });
    BarTwo = new App.Views.ChartView({ model:WidgetTwo });
});