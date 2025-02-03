// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    // When user changes the number of hours, hide the grand total
    $('#numHours').on('input', function() {
        $('#grandTotal').hide();
    });

    // Calculate total when the button is clicked
    $('#btnCalculate').click(function(){
        var hours = $('#numHours').val();
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a valid positive number for hours.');
        } else {
            var chargePerHour = 50;
            var total = chargePerHour * hours;
            $('#grandTotal').text('Grand Total: $' + total).show();
        }
    });
});
