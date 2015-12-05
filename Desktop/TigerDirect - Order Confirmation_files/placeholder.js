$(document).ready(function () {
    if (!Modernizr.input.placeholder) {
        $("input").each(function () {
            if ($(this).val() == "" && $(this).attr("placeholder") != "") {
                $(this).val($(this).attr("placeholder"));
                $(this).focus(function () {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
                $(this).blur(function () {
                    if ($(this).val() == "") {
                        $(this).val($(this).attr("placeholder"));
                    }
                });
            }
        });
        $("form").submit(function () {
            $(this).find("input[placeholder]").each(function () {
                if ($(this).val() == $(this).attr("placeholder"))
                    $(this).val("");
            });
        });
    }
    $(".optional input").focus(function () { $(this).closest("li").removeClass("optional"); });
    $(".optional input").blur(function () {
        if ($(this).val() == $(this).attr("placeholder"))
            $(this).closest("li").addClass("optional");
    });
});