/*
 If bootstrap progress bars with an attribute "data-percentage" exist, they will be slowly filled to the percentage
 specified in the mentioned data-attribute.
 Be sure NOT to set the width using inline style with this approach, it will look like shit.
 */

$(document).ready(function () {
    $(".progress-bar").each(function () {

        if ($(this).data('percentage')) {
            let initialWidth = $(this).data('percentage');

            $(this).css('transition', '0s').css('width', '0%');
            $(this).animate(
                {
                    transition: '',
                },
                {
                    complete: function(){
                        $(this).animate(
                            {
                                width: initialWidth+"%",
                            },
                        )}
                }
            );
        }
    });

});
