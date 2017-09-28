AutoForm.addInputType('jsonInterpreter', {
    template: 'jsonInterpreter',
    valueOut: function() {
       try {
           return JSON.parse(this.val());
       }
       catch (e) {
           console.error(e.message);
       }
    },
    valueIn: function (val) {
        return JSON.stringify(val);
    }
});

Template.jsonInterpreter.helpers({
    dataSchemaKey: function () {
        return this.atts['data-schema-key'];
    }
});