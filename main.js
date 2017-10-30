$(document).ready(function(){
    $('a').click(function() 
        {  
            return false;
        }
    );

    $('.box').click(function()
        {
            var value = $(this).attr('ref');
            $(this).effect(value,'slow');
        }
    );
});