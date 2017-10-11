AutoForm.addInputType('jsonInterpreter', {
    template: 'jsonInterpreter',
    valueOut: function() {
       try {
           var json = JSON.parse(this.val());
           return JSON.stringify(json);
       }
       catch (e) {
           console.error(e.message);
       }
    },
    valueIn: function (val) {
        return val;
    }
});

Template.jsonInterpreter.helpers({
    dataSchemaKey: function () {
        return this.atts['data-schema-key'];
    }
});