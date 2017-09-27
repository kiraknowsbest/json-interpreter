AutoForm.addInputType('jsonInterpreter', {
    template: 'jsonInterpreter',
    valueOut: function() {
        let int = 'int',
            string = 'string';
        return eval(this.val());
    }
});