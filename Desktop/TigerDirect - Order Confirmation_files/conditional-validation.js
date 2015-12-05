(function ($) {
    $.validator.unobtrusive.adapters.addBool("istrue", "required");
    /*
    "Required If" Validation
    *** mvcvtkrequiredif ***
    */
    $.validator.addMethod('requiredif',
        function (value, element, parameters) {
            var id = '#' + parameters['dependentproperty'];

            // get the target value (as a string, 
            // as that's what actual value will be)
            var targetvalue = parameters['targetvalue'];
            targetvalue =
                (targetvalue == null ? '' : targetvalue).toString();

            var targetvaluearray = targetvalue.split('|');

            for (var i = 0; i < targetvaluearray.length; i++) {
                // get the actual value of the target control
                // note - this probably needs to cater for more
                // control types, e.g. radios
                var control = $(id);
                var controltype = control.attr('type');
                var actualvalue =
                    controltype === 'checkbox' ?
                        control.attr('checked').toString() :
                        control.val();

                // if the condition is true, reuse the existing 
                // required field validator functionality
                if (targetvaluearray[i] === actualvalue) {
                    return $.validator.methods.required.call(this, value, element, parameters);
                }
            }
            return true;
        }
    );

    $.validator.addMethod('stringlengthif',
        function (value, element, parameters) {
            var id = '#' + parameters['dependentproperty'];

            var targetvalue = parameters['targetvalue'];
            var minlength = parameters['minlength'];
            var maxlength = parameters['maxlength'];
            targetvalue =
                (targetvalue == null ? '' : targetvalue).toString();

            var targetvaluearray = targetvalue.split('|');

            for (var i = 0; i < targetvaluearray.length; i++) {
                var control = $(id);
                var controltype = control.attr('type');
                var actualvalue =
                    controltype === 'checkbox' ?
                        control.attr('checked').toString() :
                        control.val();
                if (targetvaluearray[i] === actualvalue) {
                    return value.length >= minlength && value.length <= maxlength;
                }
            }
            return true;
        }
    );

    $.validator.unobtrusive.adapters.add(
        'requiredif',
        ['dependentproperty', 'targetvalue'],
        function (options) {
            options.rules['requiredif'] = {
                dependentproperty: options.params['dependentproperty'],
                targetvalue: options.params['targetvalue']
            };
            options.messages['requiredif'] = options.message;
        }
    );

    $.validator.unobtrusive.adapters.add(
        'stringlengthif',
        ['dependentproperty', 'targetvalue', 'minlength', 'maxlength'],
        function (options) {
            options.rules['stringlengthif'] = {
                dependentproperty: options.params['dependentproperty'],
                targetvalue: options.params['targetvalue'],
                minlength: options.params['minlength'],
                maxlength: options.params['maxlength']
            };
            options.messages['stringlengthif'] = options.message;
        }
    );
}
)(jQuery);
