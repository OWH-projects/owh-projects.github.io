var apmonths = [ "Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec." ];

function apDate(dateobj) {
    var d = new Date(dateobj), thisdate = apmonths[d.getMonth()] + " " + d.getUTCDate();
    return thisdate;
};

function isLast(iter, arr) {
    var len = arr.length -1;
    if ( iter !== len )
        return '<hr>' 
};

$('document').ready(function() {
    $.getJSON('js/bb.json').success(function(data) {
        _.templateSettings.variable = "grapefruit";
        var template = _.template($( "script.template" ).html());            
        $('#brown_bag').html(template( data.bb ));
    }).then(function() {
        $("#loading").hide();
        $("#brown_bag").fadeIn('fast');
    }).fail(function() {
        alert("Sorry, something broke. Try reloading the page.");
    });    
});