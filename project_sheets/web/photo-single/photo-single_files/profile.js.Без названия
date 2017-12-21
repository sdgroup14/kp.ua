kp.modules.profile = (function () {
    var self = {};

    self.options = {
        loginUrl: '/aut/user.hnd',
        logoutUrl: '/aut/logout.hnd',
        avtorizationUrl: '/js/login.js?v=2',
        adminPanelUrl: '/aut/admin.hnd',
        errorUrl: '/er.hnd',
        //        resursUrlru: '/js/lang/profile_ru.js',
        //        resursUrlua: '/js/lang/profile_ua.js',
        //        templateUrl: '/js/tpl/user.mini.js',
        resursIsLoad: false,
        dataUser: '',
        errorList: new Array(),
        messages: ['Ошибка',
                   'Авторизация временно недоступна.'
        ]
    };

    self.methods = {
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

                UserNotification(self.options.messages[0], self.options.messages[1]);

            } else {
                self.options.errorList.push(message + " \n");
            }
        },

        //        loadTemplate: function() {
        //            $.when($.jsonp({ url: Domain.Auth + ((Domain.Langid == 1) ? self.options.resursUrlua : self.options.resursUrlru), timeout: 90000, cache: true }),
        //                   $.jsonp({ url: Domain.Auth + self.options.templateUrl, timeout: 90000, cache: true }))
        //            .done(function (res, tmpl) {
        //                self.options.resursIsLoad = true;

        //                self.options.messages = res[0].messages;

        //                $.template("user", tmpl[0].data);

        //                var obj = res[0].user;
        //                obj.user = self.options.dataUser;
        //                obj.pageId = Domain.PageId;
        //                $.tmpl("user", obj).appendTo('#user');
        //            })
        //            .fail(function (jqxhr, textStatus, error) {
        //                self.methods.errorNotify("File profile.js KpUa.modules.profile.self.methods.loadTemplate -> ", jqxhr, textStatus, error, false);
        //            });
        //        },

        login: function () {
            $.jsonp({
                url: Domain.Auth + self.options.loginUrl,
                data: {},
                timeout: 90000, // 90 сек по умолчанию 10 сек
                success: function (data) {
                    if (data != 0) {
                        self.options.dataUser = data;

                        Domain.LinkProfile = data.LinkProfile;
                        Domain.AvatarUrl = data.AvatarUrl;
                        Domain.UserName = data.UserName;
                        Domain.IsActive = data.IsLocked;

                        var content = '<a target="_blank" href="'
                                    + data.LinkProfile
                                    + '"><span class="user__userpic"><img src="'
                                    + data.AvatarUrl
                                    + '" width="28" height="28"></span><span class="user__name">'
                                    + data.UserName
                                    + '</span></a><a href="javascript:void()" class="user__link">Выйти</a>';
                        $('.user-panel').html(content);
                        $('.user-panel a.user__link').click(function () {
                            kp.modules.profile.logout();
                            return false;
                        });

                        //                        self.methods.loadTemplate();
                        if (data.IsAdmin) {
                            self.methods.loadAdminPanel();
                        }
                        Domain.IsLogin = true;                        

                    } else {
                        var e = document.createElement("script");
                        e.src = Domain.Auth + self.options.avtorizationUrl;
                        e.type = "text/javascript";
                        document.getElementsByTagName("head")[0].appendChild(e);
                    }

                    Domain.Authorized.fire();

                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js KpUa.modules.login.self.methods.login -> ", jqxhr, textStatus, error, false);
                }
            });
        },

        loadAdminPanel: function () {
            $.jsonp({
                url: Domain.Auth + self.options.adminPanelUrl,
                data: { "pageId": Domain.PageId, "informationId": Domain.InformationId },
                callbackParameter: 'callback',
                success: function (data) {
                    if (data != 0) {
                        $('#frm').prepend(data.value.replace(/'/g, '"'));
                    }
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File profile.js KpUa.modules.profile.self.methods.loadAdminPanel -> ", jqxhr, textStatus, error);
                }
            });
        },

        logout: function () {
            $.jsonp({
                url: Domain.Auth + self.options.logoutUrl,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                data: {},
                callbackParameter: 'callback',
                success: function (data) {
                    location.reload();
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File profile.js KpUa.modules.profile.self.methods.logout -> ", jqxhr, textStatus, error, true);
                }
            });
        }

    };
    return {
        init: function () {
            self.methods.login();
        },

        logout: function () {
            self.methods.logout();
        },

        sowUser: function () {
            if (!self.options.resursIsLoad) {
                self.methods.errorNotify("File profile.js KpUa.modules.profile.sowUser -> ", null, null, null, true);
                return false;
            }
            return true;
        }
    };
})();

$(function () { kp.modules.profile.init(); });