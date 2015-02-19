function userConfirm() {
    $("#confirm").html("Your session will expire unless you click to stay on this page.");
    $("#confirm").dialog({
        dialogClass: "no-close",
        autoOpen: false,
        resizable: false,
        modal: true,
        title: "Session Expiring",
        position: {my: "center", at: "center", of: window},
        buttons: {
            "Stay": function () {
                $(this).dialog('close');
                action(true);
            },
            "Exit": function () {
                $(this).dialog('close');
                action(false);
            }
        }
    });
    $('#confirm').parent().css({position:"fixed"}).end().dialog('open');
};

function action(value) {
    if (value == true) {
        setTimeout(userConfirm, 10000);
    } else {
        window.location.href="http://www.google.com";
    }
};

setTimeout(userConfirm, 10000);

$(function() {
    $('#date').datepicker();
});