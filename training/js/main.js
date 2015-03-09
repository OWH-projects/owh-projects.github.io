var apmonths = [ "Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec." ];
    
    function isLast(iter) {
        var len = bb.length -1;
        if ( iter !== len ) 
            return '<hr>'
    };
    
    
    function apDate(dateobj) {
        var d = new Date(dateobj), thisdate = apmonths[d.getMonth()] + " " + d.getUTCDate();
        return thisdate;
    };
    
        var template = _.template($( "script.template" ).html());            
        $('#brown_bag').html(template( bb ));