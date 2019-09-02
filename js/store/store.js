
$(function() {

    //code from https://stackoverflow.com/questions/379900/fade-in-each-element-one-after-another
    $(".store-item")
        .hide()
        .each(function(index) {
            $(this).delay(400*index).fadeIn("slow")
            console.log(this)
        })

})