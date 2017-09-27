AutoForm.addInputType('jsonInterpreter', {
    template: 'jsonInterpreter',
    valueOut: function() {
        return this[0].innerHTML;
    }
});