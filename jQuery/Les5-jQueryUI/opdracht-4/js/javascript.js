// $( "#slider" ).slider({
//         range: "true",
//         min: 1,
//         max: 100,
//         values: [ 10, 50 ],
//         slide: function( event, ui ) {
//             $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//           }
// });
// $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
//       " - " + $( "#slider-range" ).slider( "values", 1 ) );


$( "#slider" ).slider({
range: true,
min: 1,
max: 100,
values: [ 5, 20 ],
slide: function( event, ui ) {
    $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
}
});
$( "#amount" ).val( $( "#slider" ).slider( "values", 0 ) +
" - " + $( "#slider" ).slider( "values", 1 ) );

$("#amount").tooltip();
