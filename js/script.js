
$(document).ready(function(){ //scrolling
    $("a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){
            window.location.hash = hash;
        });
    });
});
function KisteLeichtrechner() {
    var x = document.getElementById("CountKisteLeicht").value;
    document.getElementById("PriceOutputKisteLeicht").innerHTML = "Endsumme: " + x *5.99+ "€";
}
function KisteStandardrechner() {
    var x = document.getElementById("CountKisteStandard").value;
    document.getElementById("PriceOutputKisteStandard").innerHTML = "Endsumme: " + x *6.99+ "€";
}
function KistePremiumrechner() {
    var x = document.getElementById("CountKistePremium").value;
    document.getElementById("PriceOutputKistePremium").innerHTML = "Endsumme: " + x *7.99+ "€";
}
