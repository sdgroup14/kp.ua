kp.modules.search = (function () {
    var self = {};
    self.options = {
        searchLink: '&q={search}',
        searchParam: '{search}'
    };

    return {
        init: function (div) {
            $(div + '.search .search__text').keydown(function (event) {
                event = event || window.event;
                if (event.which == 13) {
                    event.preventDefault();
                    $(div + '.search__submit input[type=submit]').trigger('click');
                }
            });
        },
        search: function (event, div) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            var val = $(div + '.search input[type=text]').val();
            if (val.length > 0)
                window.location = Domain.SearchUrl + self.options.searchLink.
                                                                    replace(self.options.searchParam, encodeURIComponent(val));
        },
        getUrl: function (sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return  decodeURIComponent(sParameterName[1]);
                }
            }
        }
    };
})();


$(function () { kp.modules.search.init('.header__widgets '); });