(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

/* global $ */

$(function () {

    /***
     Functions
     ***/

    var elements = document.querySelectorAll('input,select,textarea');

    for (var i = elements.length; i--;) {
        elements[i].addEventListener('invalid', function () {
            window.scrollTo(0, 94);
        });
    }

    var $giftaidForm = $('#giftaid-form');
    var $countryFormElement = $('select[name=country]');
    var $donationFormElement = $('#id_amount');

    function showGiftAid() {
        if ($countryFormElement.val() === 'United Kingdom') {
            updateGiftAid();
            $donationFormElement.change(updateGiftAid);
            $donationFormElement.change();
            $giftaidForm.show();
        } else {
            $giftaidForm.hide();
            $donationFormElement.off('change');
        }
    }

    function updateGiftAid() {
        if ($($countryFormElement).val() === 'United Kingdom') {
            var amount = $donationFormElement.val();
            if (parseInt(amount)) {
                $('.giftaid-form--donation-amount').html(parseInt(amount).toFixed(2));
                $('.giftaid-form--donation-giftaid').html((parseInt(amount) * 1.25).toFixed(2));
                $giftaidForm.show();
            }
        }
    }

    $countryFormElement.change(showGiftAid);
});

})));
//# sourceMappingURL=form-validation.js.map
