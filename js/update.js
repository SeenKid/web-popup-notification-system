var alert_items = document.querySelectorAll(".alert_item");
var error_items = document.querySelectorAll(".error_item");
var allgood_items = document.querySelectorAll(".allgood_item");
var btns = document.querySelectorAll(".btn");
var alert_wrapper = document.querySelector(".alert_wrapper");
var error_wrapper = document.querySelector(".error_wrapper");
var allgood_wrapper = document.querySelector(".allgood_wrapper");
var close_btns = document.querySelectorAll(".close");

// @import("../translations.xml")
// TODO : ajouter un système de langue et traductions


/* Messages des notifications */ 
var selection_empty = 'Aucun élement sélectionné' ;
var succes = 'L\'opération a été effectuée avec succès' ;
var data = 'Problème avec les données';
var erreur_inconnue = 'Une erreur est survenue';


btns.forEach(function (btn, btn_index) {
    btn.addEventListener("click", function () {
        alert_wrapper.classList.add("active");

        alert_items.forEach(function (alert_item, alert_index) {
            if (btn_index == alert_index) {
                alert_item.style.top = "50%";
            }
            else {
                alert_item.style.top = "-100%";
            }
        })
    })
})

// erreur
btns.forEach(function (btn, btn_index) {
    btn.addEventListener("click", function () {
        error_wrapper.classList.add("active");

        error_items.forEach(function (error_item, error_index) {
            if (btn_index == error_index) {
                error_item.style.top = "50%";
            }
            else {
                error_item.style.top = "-100%";
            }
        })
    })
})

// Validation
btns.forEach(function (btn, btn_index) {
    btn.addEventListener("click", function () {
        allgood_wrapper.classList.add("active");

        allgood_items.forEach(function (allgood_item, allgood_index) {
            if (btn_index == allgood_index) {
                allgood_item.style.top = "50%";
            }
            else {
                allgood_item.style.top = "-100%";
            }
        })
    })
})

close_btns.forEach(function (close, close_index) {
    close.addEventListener("click", function () {
        alert_wrapper.classList.remove("active");

        alert_items.forEach(function (alert_item, alert_index) {
            alert_item.style.top = "-100%";
        })
    })
})

close_btns.forEach(function (close, close_index) {
    close.addEventListener("click", function () {
        error_wrapper.classList.remove("active");

        error_items.forEach(function (error_item, error_index) {
            error_item.style.top = "-100%";
        })
    })
})

close_btns.forEach(function (close, close_index) {
    close.addEventListener("click", function () {
        allgood_wrapper.classList.remove("active");

        allgood_items.forEach(function (allgood_item, allgood_index) {
            allgood_item.style.top = "-100%";
        })
    })
})

function showSuccess(msg)
{
    $('.allgood .msg').html(msg);
    $('.allgood').addClass("show");
    $('.allgood').removeClass("hide");

    setTimeout(function(){
        $('.allgood').removeClass("show");
        $('.allgood').addClass("hide");
    },2500);
    
}
function showAlert(msg)
{
    $('.alert .msg').html(msg);
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
 
    setTimeout(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
    },2500);
    
}
function showError(msg)
{
    $('.error .msg').html(msg);
    $('.error').addClass("show");
    $('.error').removeClass("hide");

    setTimeout(function(){
        $('.error').removeClass("show");
        $('.error').addClass("hide");
    },2500);

}
