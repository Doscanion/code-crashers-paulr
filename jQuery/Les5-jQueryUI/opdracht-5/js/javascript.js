$('#datepicker').datepicker( 
    $.datepicker.regional[ "nl" ] 
);

$('#datepicker').datepicker('option',{
    daysOfWeekDisabled: [3], //Werkt niet?
    beforeShowDay: $.datepicker.noWeekends,
    maxDate: '+6w',
    minDate: '-2m',
    altField: "#alt-date",
    
});

$('#alt-date').css({
    'margin-top': '10px',
    "font-weight": "bold"
})

