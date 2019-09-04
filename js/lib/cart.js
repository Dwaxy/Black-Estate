$(function() { 
    $("#cart, .cart-item").hide()
})


$("#open-cart").click(function() {
    $("#cart").fadeIn()
})

$("#close-cart").click(function() {
    $("#cart").fadeOut()
})

$("#add-to-cart").click(function() {
    $("#cart, .cart-item").fadeIn()
})

$(".clear-cart").click(function() {
    $(".cart-item").fadeOut()
})