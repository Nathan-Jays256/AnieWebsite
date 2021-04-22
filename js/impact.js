/* global $ */

$(function () {

    /***

    Functions

    ***/

    // Impact tab reveal
    function impactReveal( e ) {
        var $item = $( e.currentTarget ),
            $row = $item.parents( 'tr' ),
            $nextRow = $row.next();

        $nextRow.toggleClass('open');
        $row.toggleClass('active');
    }

    $('.impact__table__row__heading').on('click', impactReveal);

});
