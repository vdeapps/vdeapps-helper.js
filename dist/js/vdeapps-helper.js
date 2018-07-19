'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright vdeApps
 */

var vdeappsHelper = function () {
    function vdeappsHelper() {
        _classCallCheck(this, vdeappsHelper);

        this.name('vdeappsHelper');
    }

    /**
     * php str_pad
     * @example str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
     * @example str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
     *
     * @param input
     * @param padLength
     * @param padString
     * @param padType
     * @returns {string}
     */


    _createClass(vdeappsHelper, null, [{
        key: 'str_pad',
        value: function str_pad(input, padLength, padString, padType) {
            // eslint-disable-line camelcase
            //  discuss at: http://locutus.io/php/str_pad/
            // original by: Kevin van Zonneveld (http://kvz.io)
            // improved by: Michael White (http://getsprink.com)
            //    input by: Marco van Oort
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
            //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
            //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
            //   returns 2: '------Kevin van Zonneveld-----'

            var half = '';
            var padToGo;

            var _strPadRepeater = function _strPadRepeater(s, len) {
                var collect = '';

                while (collect.length < len) {
                    collect += s;
                }
                collect = collect.substr(0, len);

                return collect;
            };

            input += '';
            padString = padString !== undefined ? padString : ' ';

            if (padType !== 'STR_PAD_LEFT' && padType !== 'STR_PAD_RIGHT' && padType !== 'STR_PAD_BOTH') {
                padType = 'STR_PAD_RIGHT';
            }
            if ((padToGo = padLength - input.length) > 0) {
                if (padType === 'STR_PAD_LEFT') {
                    input = _strPadRepeater(padString, padToGo) + input;
                } else if (padType === 'STR_PAD_RIGHT') {
                    input = input + _strPadRepeater(padString, padToGo);
                } else if (padType === 'STR_PAD_BOTH') {
                    half = _strPadRepeater(padString, Math.ceil(padToGo / 2));
                    input = half + input + half;
                    input = input.substr(0, padLength);
                }
            }

            return input;
        }

        /**
         * Execute function by dynamic name
         * executeFunctionByName("My.Namespace.functionName", window, arguments);
         * executeFunctionByName("Namespace.functionName", My, arguments);
         * @param functionName
         * @param context
         * @param args
         * @returns result function
         */

    }, {
        key: 'executeFunctionByName',
        value: function executeFunctionByName(functionName, context /*, args */) {
            if (typeof context == 'undefined') {
                context = window;
            }
            var args = Array.prototype.slice.call(arguments).splice(2, 2);
            var namespaces = functionName.split(".");

            $.each(namespaces, function (key, value) {
                context = context[value];
            });
            if (typeof context == 'function') {
                return context.apply(this, args);
            }
            return false;
        }

        /**
         * Retourne un ID unique
         * @returns {string}
         */

    }, {
        key: 'uniqID',
        value: function uniqID() {
            var ts = new Date().getTime();
            var randnum = Math.floor(Math.random() * 1000 + 1);
            return String(ts) + String(randnum);
        }

        /**
         * reset all form elements
         * use jQuery
         * @param elem
         */

    }, {
        key: 'resetFilters',
        value: function resetFilters(elem) {
            var $form = $(elem).closest('form');

            $('input, select', $form).each(function () {
                if (typeof $(this).attr('name') != 'undefined') {
                    if ($(this).attr('class').indexOf('selectpicker') != -1) {
                        if (typeof $(this).attr('multiple') != 'undefined') {
                            $(this).selectpicker('deselectAll');
                        } else {
                            $(this).selectpicker('val', '');
                        }
                    } else {
                        $(this).val('');
                    }
                }
            });
        }
    }]);

    return vdeappsHelper;
}();