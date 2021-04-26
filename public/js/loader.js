function ShowLoader(msg) {
    if (msg === undefined) {
        msg = "Loading";
    }

    $("#divLoader").remove();
    $("body").append("<div id='divLoader' class='loader-wrapper'><div class='loader-inner'><div class='loader'></div><span>" + msg + "</span></div></div>");
}

function HideLoader() {
    $("#divLoader").remove();
}

function ShowSLoader(msg) {
    if (msg === undefined) {
        msg = "Loading";
    }
    $(".loader-inner").remove();
    $("body").append("<div class='loader-inner'><div class='loader'></div><span>" + msg + "</span></div>");
}

function HideSLoader() {
    $(".loader-inner").remove();
}

$.fn.showMsg = function (msg) {
    $(this).html('<div class="woocommerce-message" role="alert">' + msg +'</div >');
};
$.fn.showErrorMsg = function (msg) {
    $(this).html('<div class="woocommerce-message-error" role="alert">' + msg + '</div >');
};

$.fn.resetForm = function () {
    $(this).find("input[type=text], textarea, select,input[type=password]").each(function () {
        $(this).val("");
        $(this).RemoveErrorLabel();
    })
    $(this).find('input:checkbox').each(function () {
        $(this).attr('checked', 'checked');   
    })
   
}
$.fn.StartLoading = function () {
    $(this).html('<div class="lds-facebook"><div></div><div></div><div></div><div></div><div></div><div></div></div>');
}


