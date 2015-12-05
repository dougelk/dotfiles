$.ajaxSetup({
    cache: false,
    beforeSend: function () {
        $("#ajax-loader").show();
    },
    complete: function () {
        $("#ajax-loader").hide();
    },
    success: function () {
        $("#ajax-loader").hide();
    }
});
$(document).ajaxStart(function() {
    $("#ajax-loader").show();
});
$(document).ajaxComplete(function() {
    $("#ajax-loader").hide();
});
$(document).ajaxSuccess(function() {
    $("#ajax-loader").hide();
});
