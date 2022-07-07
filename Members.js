$(function() {
    $( "#dialog1" ).dialog({
        autoOpen: true,
    });
    $( "#opener" ).click(function() {
        $( "#dialog1" ).dialog( "open" );
    });
});