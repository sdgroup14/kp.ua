kp.modules.login = (function () {
    var self = {};

    self.options = {
        prefixId: '',
        isClose: '',
        referrer: null,
        loginUrl: '/aut/user.hnd',
        errorUrl: '/er.hnd',
        errorList: new Array(),
        errorLoadResurs: false,
        messages: ['Ошибка',
                   'Авторизация временно недоступна. '
        ],
        validMessage: []
    };

    self.methods = {
        init: function () {
        },

        loadTemplate: function (obj) {
            $.jsonp({
                url: Domain.Auth + obj.templateUrl,
                data: {},
                cache: true,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                success: function (data) {
                    $.template(obj.templateName, data.data);
                    obj.templateIsLoad = true;
                    self.methods.showTemplate(obj);

                    $('.overlay, .popup__login.js-popup-enter').css('display', 'block');
                    self.methods.bindAuthorization();
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js kp.modules.login.self.methods.loadTemplate -> ", jqxhr, textStatus, error, true);
                }
            });
        },

        showTemplate: function (obj) {
            $.tmpl(obj.templateName).appendTo('body.index form');
        },

        show: function (obj) {
            if (obj.templateIsLoad) {
                self.methods.showTemplate(obj);
            }
            else {
                self.methods.loadTemplate(obj);
            }
        },

        bindAuthorization: function () {
            $('.overlay, .popup__login.js-popup-enter button.popup__close').click(function (e) {
                e.preventDefault();
                $('.overlay, .popup__login.js-popup-enter').css('display', 'none');
                return false;
            });

            $('.popup__login.js-popup-enter .soc-enter li a.fb').click(kp.modules.login.authorizationFB);
            $('.popup__login.js-popup-enter .soc-enter li a.tw').click(kp.modules.login.authorizationTW);
            $('.popup__login.js-popup-enter .soc-enter li a.vk').click(kp.modules.login.authorizationVK);
            $('.popup__login.js-popup-enter .soc-enter li a.gp').click(kp.modules.login.authorizationG);
            $('.popup__login.js-popup-enter .soc-enter li a.ok').click(kp.modules.login.autorizationOK);

            VK.init({ apiId: Domain.VKAppId });
        },

        errorNotify: function (message, jqxhr, textStatus, errorThrown, isShowError) {
            // jqxhr -  объект который делал запрос
            // textStatus - может быть  null, timeout, error, notmodified, parsererror
            // errorThrown - необязательный объект «исключения»
            if (jqxhr != null)
                message += "jqxhr: " + JSON.stringify(jqxhr) + " textStatus: " + textStatus;

            if (errorThrown !== undefined && errorThrown != null)
                message += " errorThrown: " + JSON.stringify(errorThrown);

            if (isShowError == true) {
                var oldError = '';

                // заберем все предыдущии ошибки которые непоказывали
                for (; self.options.errorList.length > 0; ) {
                    oldError += self.options.errorList.pop();
                }

                $.jsonp({
                    url: Domain.Auth + self.options.errorUrl,
                    data: { "txt": oldError + " \n" + message }
                });

                //                UserNotification(self.options.messages[0], self.options.messages[1]);

            } else {
                self.options.errorList.push(message + " \n");
            }
        },

        login: function () {
            var content = '<div class="top-bar__enter"><a href="javascript:void()" id="social-auth-enter" class="btn btn_gray">Войти</a></div>'
            $('.user-panel').html(content);

            $('#social-auth-enter').click(function () {
                if (!self.authorization.templateIsLoad)
                    kp.modules.login.authorizationShow();

                $('.overlay, .popup__login.js-popup-enter').css('display', 'block');
            });
        }
    };

    self.authorization = {
        templateUrl: '/js/tpl/authorization.mini.js?v=2',
        hendlerUrl: '/aut/login.hnd',
        templateName: 'authorization',
        templateIsLoad: false
    };

    self.google = {
        handlerUrl: "/aut/g/login.hnd"
    };

    self.twitter = {
        handlerUrl: "/aut/twitter.hnd"
    };

    self.ok = {
        handlerUrl: "/aut/ok/login.hnd"
    };


    return {
        init: function () {
            if (self.options.isClose == '')
                self.methods.login();
        },

        authorizationShow: function (event) {
            if (event != undefined) {
                event = event || window.event;
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            }

            self.methods.show(self.authorization);
        },

        authorizationFB: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open('https://www.facebook.com/dialog/oauth?scope=email,publish_stream,user_birthday&state=' + btoa(location.href) + '&client_id=' + Domain.FBid + '&redirect_uri=' + (Domain.Auth.indexOf("http:") > -1 ? '' : 'http:') + Domain.Auth + '/aut/fb/login.hnd&response_type=code', "FBWnd", "width=1011,height=672,resizable=yes,scrollbars=yes");
        },

        authorizationVK: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            VK.Auth.login(function (response) {
                if (response.session) {
                    console.info(response);
                    VK.Api.call('getProfiles', { uids: response.session.mid, fields: "uid, first_name, last_name, photo_rec, photo_big, nickname, bdate" }, function (r) {
                        if (r.response && r.response.length > 0) {
                            var dt = new Date();
                            $.jsonp({
                                url: Domain.Auth + '/aut/vk/login.hnd',
                                data: {
                                    'id': r.response[0].uid,
                                    'name': encodeURIComponent(r.response[0].first_name + ' ' + r.response[0].last_name),
                                    'photo': r.response[0].photo_rec,
                                    'photobig': r.response[0].photo_big,
                                    'bdate': r.response[0].bdate,
                                    'nick': r.response[0].nickname,
                                    'd': dt.getTime()
                                },
                                success: function (data) {
                                    location.reload(true);
                                },
                                error: function (jqxhr, textStatus, error) {
                                    self.methods.errorNotify("File login.js kp.modules.login.self.methods.loadTemplate -> ", jqxhr, textStatus, error, true);
                                }
                            });
                        }
                    });
                }
            });
        },

        authorizationTW: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open(Domain.Auth + self.twitter.handlerUrl + '?href=' + location.href, "TwWnd", "width=563,height=570, resizable=yes,scrollbars=yes");
        },

        authorizationG: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open('https://accounts.google.com/o/oauth2/auth?scope=email%20profile&state=' + btoa(location.href) + '&client_id=' + Domain.GClientId + '&redirect_uri=' + (Domain.Auth.indexOf("http:") > -1 ? '' : 'http:') + Domain.Auth + self.google.handlerUrl + "&response_type=code&approval_prompt=force", "Auth", 'width=800, height=600');
            return false;
        },

        autorizationOK: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id=' + Domain.OKAppId + '&scope=SET_STATUS&response_type=code&redirect_uri=' + Domain.Auth + self.ok.handlerUrl + '&state=' + btoa(location.href), "Ok", "width=563,height=570, resizable=yes,scrollbars=yes");
            return false;
        },


    };
})();

kp.modules.login.init();