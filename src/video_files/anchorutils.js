KpUa.modules.anchorutils = (function () {
    var self = {};

    self.options = {
        splitCharacter: '&',
        equalCharacter: '='
    };

    self.methods = {
        paramExist: function (paramName) {
            var anchor = self.methods.getAnchor();
            if (anchor && anchor.length > 0) {
                var params = anchor.split(self.options.splitCharacter);
                for (var i = 0; i < params.length; i++) {
                    var pair = params[i].split(self.options.equalCharacter);
                    if (pair.length == 2 && pair[0] == paramName)
                        return true;
                }
            }
            return false;
        },

        getParam: function (paramName) {
            var anchor = self.methods.getAnchor();
            if (anchor && anchor.length > 0) {
                var params = anchor.split(self.options.splitCharacter);
                for (var i = 0; i < params.length; i++) {
                    var pair = params[i].split(self.options.equalCharacter);
                    if (pair.length == 2 && pair[0] == paramName)
                        return pair[1];
                }
            }
        },

        getAnchor: function () {
            return window.location.hash.replace('#', '');
        },

        setAnchor: function (anchor) {
            if (anchor && anchor != '' || !history)
                window.location.hash = '#' + anchor;
            else {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        },

        addParam: function (paramName, value) {
            self.methods.setAnchor((self.methods.getAnchor() == '' ? '' : self.methods.getAnchor() + self.options.splitCharacter) + paramName + self.options.equalCharacter + value);
        },

        changeParam: function (paramName, value) {
            var anchor = self.methods.getAnchor();
            if (anchor && anchor.length > 0) {
                var params = anchor.split(self.options.splitCharacter);
                for (var i = 0; i < params.length; i++) {
                    var pair = params[i].split(self.options.equalCharacter);
                    if (pair.length == 2 && pair[0] == paramName) {
                        params[i] = paramName + self.options.equalCharacter + value;
                    }
                }
                self.methods.setAnchor(params.join(self.options.splitCharacter));
            }
        }

    };

    return {
        options: function (options) {
            $.extend(self.options, options);
        },

        setParam: function (paramName, value) {
            if (self.methods.paramExist(paramName))
                self.methods.changeParam(paramName, value);
            else
                self.methods.addParam(paramName, value);
        },

        getParam: function (paramName) {
            if (paramName && paramName != '')
                return self.methods.getParam(paramName);
        },

        clearAnchor: function () {
            self.methods.setAnchor('');
        },

        setUrl: function (url, params) {
            var anchor = '';
            if (params) {
                for (var i = 0; i < params.length; i++) {
                    if (params[i].value && params[i].value != '') {
                        anchor += params[i].param + self.options.equalCharacter + params[i].value;
                        if (i != params.length - 1)
                            anchor += self.options.splitCharacter;
                    }
                }
            }
            if (anchor != '' && anchor != '|')
                url = url + '#' + anchor;
            window.location = url;
        }
    }
})();