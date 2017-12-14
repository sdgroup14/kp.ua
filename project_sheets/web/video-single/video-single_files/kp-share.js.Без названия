(function (W, aD) {
	var aE = aD.documentElement;
	var ap = {};
	function aa(a) {
		if (!(a in ap)) {
			ap[a] = new RegExp("(^|\\s+)" + a + "(\\s+|$)", "")
		}
		return ap[a]
	}
	function Z(a, b) {
		return aa(b).test(a.className || "")
	}
	function am(a, b) {
		if (!Z(a, b)) {
			a.className += " " + b
		}
	}
	function ar(a, b) {
		if (a) {
			a.className = a.className.replace(new RegExp("((?:^|\\s+)" + b + "|" + b + "(?:\\s+|$))", "g"), "")
		}
	}
	function aF(a, b) {
		if (Z(a, b)) {
			ar(a, b)
		} else {
			am(a, b)
		}
	}
	var V,
		ac,
		U = V = function (a, f) {
			a = a || aD;
			var d = a[al] && a[al]("*"),
				e = [],
				b = 0,
				c = d.length;
			for (; b < c; b++) {
				if (Z(d[b], f)) {
					e.push(d[b])
				}
			}
			return e
		};
	if (aD.querySelectorAll) {
		V = function (b, a) {
			return b.querySelectorAll("." + a)
		}
	} else {
		if (aD.getElementsByClassName) {
			V = function (b, a) {
				if (b.getElementsByClassName) {
					return b.getElementsByClassName(a)
				}
				return U(b, a)
			}
		}
	}
	function ao(c, a) {
		var b = c;
		do {
			if (Z(b, a)) {
				return b
			}
		} while (b = b.parentNode);
		return null
	}
	if (W.innerHeight) {
		ac = function () {
			return {
				width: W.innerWidth,
				height: W.innerHeight
			}
		}
	} else {
		if (aE && aE.clientHeight) {
			ac = function () {
				return {
					width: aE.clientWidth,
					height: aE.clientHeight
				}
			}
		} else {
			ac = function () {
				var a = aD.body;
				return {
					width: a.clientWidth,
					height: a.clientHeight
				}
			}
		}
	}
	var aA = aD.addEventListener ? function (c, b, a) {
			c.addEventListener(b, a, false)
		} : function (c, b, a) {
			c.attachEvent("on" + b, a)
		},
		aK = aD.removeEventListener ? function (c, b, a) {
			c.removeEventListener(b, a, false)
		} : function (c, b, a) {
			c.detachEvent("on" + b, a)
		};
	var au,
		ab;
	if ("onmouseenter" in aE) {
		au = function (b, a) {
			aA(b, "mouseenter", a)
		};
		ab = function (b, a) {
			aA(b, "mouseleave", a)
		}
	} else {
		au = function (b, a) {
			aA(b, "mouseover", function (c) {
				if (X(c, this)) {
					a(c)
				}
			})
		};
		ab = function (b, a) {
			aA(b, "mouseout", function (c) {
				if (X(c, this)) {
					a(c)
				}
			})
		}
	}
	function X(b, d) {
		var c = b.relatedTarget;
		try {
			while (c && c !== d) {
				c = c.parentNode
			}
			if (c !== d) {
				return true
			}
		} catch(a) {}
	}
	function ah(a) {
		try {
			a.preventDefault()
		} catch(b) {
			a.returnValue = false
		}
	}
	function af(a) {
		try {
			a.stopPropagation()
		} catch(b) {
			a.cancelBubble = true
		}
	}
	var at = (function (b, m) {
			var k = {
					boxModel: null
				},
				h = m.defaultView && m.defaultView.getComputedStyle,
				l = /([A-Z])/g,
				g = /-([a-z])/ig,
				f = function (o, n) {
					return n.toUpperCase()
				},
				d = /^-?\d+(?:px)?$/i,
				a = /^-?\d/,
				j = function () {};
			if ("getBoundingClientRect" in aE) {
				return function (o) {
					if (!o || !o.ownerDocument) {
						return null
					}
					i();
					var p = o.getBoundingClientRect(),
						t = o.ownerDocument,
						q = t.body,
						r = (aE.clientTop || q.clientTop || 0) + (parseInt(q.style.marginTop, 10) || 0),
						s = (aE.clientLeft || q.clientLeft || 0) + (parseInt(q.style.marginLeft, 10) || 0),
						u = p.top + (b.pageYOffset || k.boxModel && aE.scrollTop || q.scrollTop) - r,
						n = p.left + (b.pageXOffset || k.boxModel && aE.scrollLeft || q.scrollLeft) - s;
					return {
						top: u,
						left: n
					}
				}
			} else {
				return function (s) {
					if (!s || !s.ownerDocument) {
						return null
					}
					e();
					var u = s.offsetParent,
						v = s,
						n = s.ownerDocument,
						p,
						r = n.body,
						q = n.defaultView,
						w = q ? q.getComputedStyle(s, null) : s.currentStyle,
						o = s.offsetTop,
						t = s.offsetLeft;
					while ((s = s.parentNode) && s !== r && s !== aE) {
						if (k.supportsFixedPosition && w.position === "fixed") {
							break
						}
						p = q ? q.getComputedStyle(s, null) : s.currentStyle;
						o -= s.scrollTop;
						t -= s.scrollLeft;
						if (s === u) {
							o += s.offsetTop;
							t += s.offsetLeft;
							if (k.doesNotAddBorder && !(k.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(s.nodeName))) {
								o += parseFloat(p.borderTopWidth, 10) || 0;
								t += parseFloat(p.borderLeftWidth, 10) || 0
							}
							v = u,
							u = s.offsetParent
						}
						if (k.subtractsBorderForOverflowNotVisible && p.overflow !== "visible") {
							o += parseFloat(p.borderTopWidth, 10) || 0;
							t += parseFloat(p.borderLeftWidth, 10) || 0
						}
						w = p
					}
					if (w.position === "relative" || w.position === "static") {
						o += r.offsetTop;
						t += r.offsetLeft
					}
					if (k.supportsFixedPosition && w.position === "fixed") {
						o += Math.max(aE.scrollTop, r.scrollTop);
						t += Math.max(aE.scrollLeft, r.scrollLeft)
					}
					return {
						top: o,
						left: t
					}
				}
			}
			function c(s, v, u) {
				var o,
					w = s.style;
				if (!u && w && w[v]) {
					o = w[v]
				} else {
					if (h) {
						v = v.replace(l, "-$1").toLowerCase();
						var p = s.ownerDocument.defaultView;
						if (!p) {
							return null
						}
						var n = p.getComputedStyle(s, null);
						if (n) {
							o = n.getPropertyValue(v)
						}
					} else {
						if (s.currentStyle) {
							var r = v.replace(g, f);
							o = s.currentStyle[v] || s.currentStyle[r];
							if (!d.test(o) && a.test(o)) {
								var t = w.left,
									q = s.runtimeStyle.left;
								s.runtimeStyle.left = s.currentStyle.left;
								w.left = r === "fontSize" ? "1em" : (o || 0);
								o = w.pixelLeft + "px";
								w.left = t;
								s.runtimeStyle.left = q
							}
						}
					}
				}
				return o
			}
			function i() {
				var n = m.createElement("div");
				n.style.width = n.style.paddingLeft = "1px";
				m.body.appendChild(n);
				k.boxModel = n.offsetWidth === 2;
				m.body.removeChild(n).style.display = "none";
				n = null;
				i = j
			}
			function e() {
				var q = m.body,
					p = m.createElement("div"),
					u,
					s,
					t,
					r,
					o = parseFloat(c(q, "marginTop", true), 10) || 0,
					n = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				p.style.cssText = "position:absolute;top:0;lefto:0;margin:0;border:0;width:1px;height:1px;visibility:hidden;";
				p.innerHTML = n;
				q.insertBefore(p, q.firstChild);
				u = p.firstChild;
				s = u.firstChild;
				r = u.nextSibling.firstChild.firstChild;
				k.doesNotAddBorder = (s.offsetTop !== 5);
				k.doesAddBorderForTableAndCells = (r.offsetTop === 5);
				s.style.position = "fixed",
				s.style.top = "20px";
				k.supportsFixedPosition = (s.offsetTop === 20 || s.offsetTop === 15);
				s.style.position = s.style.top = "";
				u.style.overflow = "hidden",
				u.style.position = "relative";
				k.subtractsBorderForOverflowNotVisible = (s.offsetTop === -5);
				k.doesNotIncludeMarginInBodyOffset = (q.offsetTop !== o);
				q.removeChild(p);
				q = p = u = s = t = r = null;
				i();
				e = j
			}
		})(W, aD);
	var aG = (function (g, b) {
			var e = false,
				f = false,
				a = [],
				d;
			function c() {
				if (!e) {
					if (!b.body) {
						return setTimeout(c, 13)
					}
					e = true;
					if (a) {
						var j,
							k = 0;
						while ((j = a[k++])) {
							j.call(null)
						}
						a = null
					}
				}
			}
			function h() {
				if (f) {
					return
				}
				f = true;
				if (b.readyState === "complete") {
					return c()
				}
				if (b.addEventListener) {
					b.addEventListener("DOMContentLoaded", d, false);
					g.addEventListener("load", c, false)
				} else {
					if (b.attachEvent) {
						b.attachEvent("onreadystatechange", d);
						g.attachEvent("onload", c);
						var k = false;
						try {
							k = g.frameElement == null
						} catch(j) {}
						if (aE.doScroll && k) {
							i()
						}
					}
				}
			}
			if (b.addEventListener) {
				d = function () {
					b.removeEventListener("DOMContentLoaded", d, false);
					c()
				}
			} else {
				if (b.attachEvent) {
					d = function () {
						if (b.readyState === "complete") {
							b.detachEvent("onreadystatechange", d);
							c()
						}
					}
				}
			}
			function i() {
				if (e) {
					return
				}
				try {
					aE.doScroll("left")
				} catch(j) {
					setTimeout(i, 1);
					return
				}
				c()
			}
			return function (j) {
				h();
				if (e) {
					j.call(null)
				} else {
					a.push(j)
				}
			}
		})(W, aD);
	function aq() {
		var b = (function (f) {
				f = f.toLowerCase();
				var e = /(webkit)[ \/]([\w.]+)/.exec(f) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(f) || /(msie) ([\w.]+)/.exec(f) || !/compatible/.test(f) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(f) || [];
				return {
					browser: e[1] || "",
					version: e[2] || "0"
				}
			})(navigator.userAgent);
		var d = '',
			a = ".b-share-popup__i,.b-share-popup__icon,.b-share-popup__main,.b-share-popup_full .b-share-popup__extra{zoom:1;display:inline}.b-share-popup_to-left{left:0}.b-share-popup_to-right .b-share-popup__expander{direction:ltr}.b-share-popup_to-right .b-share-popup__expander .b-share-popup__item{direction:rtl}.b-share-popup__icon{margin-top:-1px}.b-share-popup__icon_input{margin-top:-4px}.b-share-popup__icon__input{width:14px}.b-share-popup__spacer{overflow:hidden;font:1px/1 Arial}.b-share-popup__input__input{width:100px;direction:ltr}.b-share-popup_full .b-share-popup__input_link .b-share-popup__input__input,.b-share-popup_full .b-share-popup__form .b-share-popup__input__input{width:200px}.b-share-popup-wrap{margin-bottom:25px}.b-share-popup__form{direction:ltr}.b-share-popup__form__button,.b-share-popup__form__close,.b-share-popup__form__link{float:none;display:inline-block}.b-share-popup_full .b-share-popup__form__close{margin-left:70px}* HTML .b-share-popup_up .b-share-popup__tail{overflow:hidden;bottom:-10px}* html .b-share-form-button{text-decoration:none!important}.b-share-form-button{position:relative;overflow:visible}.b-share-form-button__before,.b-share-form-button__after{top:0}button.b-share-form-button .b-share-form-button__before,button.b-share-form-button .b-share-form-button__after{margin-top:auto}.b-share-form-button__icon{top:0}.b-share{zoom:1;display:inline}* HTML .b-share-form-button_share .b-share-form-button__icon{margin-top:-1px;background-image:url(//yandex.st/share/static/b-share-form-button_share__icon.gif)}";
		var c = document.createElement("style");
		c.type = "text/css";
		c.id = "ya_share_style";
		if (c.styleSheet) {
			c.styleSheet.cssText = b.browser === "msie" && (b.version < 8 || aD.documentMode < 8) ? d + a : d
		} else {
			c.appendChild(aD.createTextNode(d))
		}
		d = a = "";
		av.appendChild(c);
		aq = function () {}
	}
	var az = function () {},
		ai = null,
		al = "getElementsByTagName",
		aw = encodeURIComponent,
		av = aD[al]("head")[0] || aD.body,
		aC = "//yandex.st/share",
		ay = "http://share.yandex.ru",
		ax = {
			ru: {
				blogger: "Blogger",
				delicious: "delicious",
				diary: "Diary",
				digg: "Digg",
				evernote: "Evernote",
				facebook: "Facebook",
				friendfeed: "FriendFeed",
				gbuzz: "Google Buzz",
				gplus: "Google Plus",
				greader: "Google Reader",
				juick: "Juick",
				linkedin: "LinkedIn",
				liveinternet: "LiveInternet",
				lj: "LiveJournal",
				kp: "КП",
				moikrug: "Мой Круг",
				moimir: "Мой Мир",
				myspace: "MySpace",
				odnoklassniki: "Одноклассники",
				pinterest: "Pinterest",
				pocket: "Pocket",
				surfingbird: "Surfingbird",
				tutby: "Я ТУТ!",
				twitter: "Twitter",
				vkontakte: "ВКонтакте",
				yaru: "Я.ру",
				yazakladki: "Яндекс.Закладки"
				}
			},
		aJ = {};
	function ak(l, q) {
		aq();
		if (!l || !l.element) {
			throw new Error("Invalid parameters")
		}
		var f = l.element;
		if (typeof f === "string") {
			f = aD.getElementById(f)
		} else {
			if (!f.nodeType === 1) {
				f = null
			}
		}
		if (!f || f.yashareInited) {
			return
		}
		f.yashareInited = true;
		var o = {};
		if (l.style) {
			o.type = l.style.button === false ? "link" : "button";
			o.linkUnderline = l.style.link;
			o.border = l.style.border;
			o.linkIcon = l.style.icon
		}
		var h,
			p,
			i = l.l10n,
			b = (l.link || W.location) + "",
			m = l.elementStyle || o || {
				type: "button"
			},
			g = m.quickServices || l.services || [
				"|", "yaru", "vkontakte", "odnoklassniki", "twitter", "facebook", "moimir", "lj"
			],
			j = l.title || aD.title,
			u = l.serviceSpecific || l.override || {},
			c = "ya-share-" + Math.random() + "-" + + (new Date()),
			a = !/(?:moikrug\.ru|ya\.ru|yandex\.by|yandex\.com|yandex\.com\.tr|yandex\.kz|yandex\.net|yandex\.ru|yandex\.ua|yandex-team\.ru)$/.test(location.hostname),
			r,
			d = l.servicesDeclaration;
		if (!i || !(i in ax)) {
			i = location.hostname.split(".").splice(-1, 1)[0];
			switch (i) {
			case "by":
				i = "ru";
				break;
			case "kz":
				i = "ru";
				break;
			case "ua":
				i = "ru";
				break;
			case "com":
				i = "ru";
				break;
			default:
				i = "ru"
			}
		}
		if (l.theme == "counter") {
			var n,
				s,
				k,
				e,
				t = ['<span class="b-share' + (m.type == "small" ? " b-share_type_small" : "") + '">'];
			for (n = 0, s = g.length; n < s; n++) {
				k = g[n];
				t.push(aI({
					serviceName: k,
					serviceTitle: aj(k, "serviceTitle", "", u),
					link: aj(k, "link", b, u),
					title: aj(k, "title", j, u),
					description: aj(k, "description", l.description || "", u),
					image: aj(k, "image", l.image || "", u),
					lang: i
				}))
			}
			if (window.postMessage) {
				t.push('<iframe style="display: none" src="' + aC + "/ya-share-cnt.html?url=" + encodeURIComponent(b) + "&services=" + g.join(",") + '"></iframe>')
			}
			aA(W, "message", q.onMessage);
			f.setAttribute("data-yasharelink", f.getAttribute("data-yasharelink") || b)
		}
		f.innerHTML = t.join("");
		if (l.theme) {
			am(f, "b-share_theme_" + l.theme.replace(/\"/g, ""))
		}
		T(f, q, "", m.type === "none");
		return [f]
	}
	function S(a) {
		var b = aD.createElement("script");
		b.setAttribute("src", location.protocol + "//clck.yandex.ru/jclck/dtype=stred/pid=52/cid=70685/path=" + a + "/rnd=" + Math.round(Math.random() * 100000) + "/*" + encodeURIComponent(location.href));
		av.appendChild(b)
	}
	function aj(e, f, d, c) {
		var a = d,
			b = c[e];
		if (b && f in b) {
			a = b[f]
		}
		return (f == "description" || f == "image" || f == "serviceTitle") ? a : aw(a)
	}
	function aH(c, a) {
		var d = ax[a][c];
		var e = "";
		var b = "";
		e += c;
		return '<span class="b-share-icon b-share-icon_' + e + '"' + b + "></span>"
	}
	function ae(b, a) {
		return ax[a] && ax[a][b] || ""
	}
	function aB(e, b, f, c, a) {
		a = a ? aw(a) : "";
		c = c ? aw(c) : "";
		var d = ay + "/go.xml?service=" + e;
		return d + "&amp;url=" + b + "&amp;title=" + f + (c ? "&amp;description=" + c : "") + (a ? "&amp;image=" + a : "")
	}
	function aI(c, a, f, b, h) {
		var g = "ru",
			e;
		if (arguments.length == 1 && typeof arguments[0] == "object") {
			var d = arguments[0];
			e = d.serviceTitle;
			c = d.serviceName;
			a = d.link;
			f = d.title;
			b = d.description;
			h = d.image;
			g = d.lang || g
		}
		if (c == "pinterest" && !h) {
			return ""
		}
		if (c in ax[g]) {
			return '<span class="b-share-btn__wrap"><a rel="nofollow" target="_blank" title="' + (e || ae(c, g)) + '" class="b-share__handle b-share__link b-share-btn__' + c + '" href="' + aB(c, a, f, b, h) + '" data-service="' + c + '">' + aH(c, g) + '<span class="b-share-counter"></span></a></span>'
		} else {
			if (c == "|") {
				return '<span class="b-share__hr"></span>'
			}
		}
	}
	function T(f, d) {
		var a = 0,
			c,
			b = V(f, "b-share__handle");
		var g = b.length;
		var e = g;
		for (a, c = e; a < c; a++) {
			aA(b[a], "click", d.onshare)
		}
	}
	function Y(a) {
		var c,
			d,
			b;
		if (!(c = a.currentTarget)) {
			b = a.target || a.srcElement;
			if (!(c = ao(b, "b-share__handle"))) {
				c = ao(b, "b-share-popup__item")
			}
		}
		if (c && (d = c.getAttribute("data-service"))) {
			S(d);
			switch (d) {
			case "facebook":
				an(a, c, 800, 500);
				break;
			case "moimir":
				an(a, c, 560, 400);
				break;
			case "twitter":
				an(a, c, 650, 520);
				break;
			case "vkontakte":
				an(a, c, 550, 420);
				break;
			case "odnoklassniki":
				an(a, c, 560, 370);
				break;
			case "gplus":
				an(a, c, 560, 370);
				break;
			case "surfingbird":
				an(a, c, 500, 170);
				break
			}
		}
		return d
	}
	function an(a, c, b, d) {
		ah(a);
		window.open(c.href, "yashare_popup", "scrollbars=1,resizable=1,menubar=0,toolbar=0,status=0,left=" + ((screen.width - b) / 2) + ",top=" + ((screen.height - d) / 2) + ",width=" + b + ",height=" + d).focus()
	}
	function ag() {
		var a = ao(this, "b-share-popup__i");
		aF(a, "b-share-popup_full")
	}
	if (!("Ya" in W)) {
		W.Ya = {}
	}
	Ya.share = function (b) {
		if (!(this instanceof Ya.share)) {
			return new Ya.share(b)
		}
		if (b) {
			aC = b.STATIC_HOST || aC;
			ay = b.SHARE_HOST || ay
		}
		this._loaded = false;
		var a = this,
			d = b.onshare || az,
			c = b.onBeforeShare || null,
			e = {
				onready: b.onready || b.onload || az,
				onbeforeclose: b.onbeforeclose || az,
				onclose: b.onclose || az,
				onbeforeopen: b.onbeforeopen || az,
				onopen: b.onopen || az,
				onshare: function (f) {
					if (c) {
						try {
							if (c(a) === false) {
								f.preventDefault();
								return false
							}
						} catch(g) {
							f.preventDefault();
							return false
						}
					}
					var h = Y(f);
					if (h) {
						a.incrementCounter(h);
						d(h, a)
					}
				},
				_this: a
			};
		e.onMessage = function (f) {
			a.onMessage(f)
		};
		this.onMessage = function (g) {
			var f = g.data.split("|"),
				h = {};
			h.service = f.shift();
			h.counter = parseInt(f.shift(), 10);
			if (h.counter >= 10000) {
				h.counter = "9999+"
			}
			h.url = f.join("|");
			if (h.url.length && h.service) {
				a.showCounter(h)
			}
		};


		// this.incrementCounter = function (i) {
		//	 if (!window.postMessage) {
		//		 return false
		//	 }
		//	 var g = V(a._block, "b-share-btn__" + i)[0],
		//		 f = g ? V(g, "b-share-counter")[0] : false,
		//		 h = parseInt(f.innerHTML || 0,
		//		 10) + 1;
		//	 f.innerHTML = (h >= 10000) ? "9999+" : h;
		//	 am(g, "b-share-btn__counter")

		// };
			
		  var counter = {};//куда то глобально и имя немешает, иначе заменить
		this.incrementCounter = function (i) {
			if (!window.postMessage || counter[i]) {
				return false
			}
			counter[i] = !0;
			var g = V(a._block, "b-share-btn__" + i)[0],
				f = g ? V(g, "b-share-counter")[0] : false,
				h = parseInt(f.innerHTML || 0,
				10) + 1;
			f.innerHTML = (h >= 10000) ? "9999+" : h;
			am(g, "b-share-btn__counter")

		};
  

//		this.showCounter = function (g) {
//			var h = V(a._block, "b-share-btn__" + g.service)[0],
//				f = h ? V(h, "b-share-counter")[0] : false;
//			if (f && a._block.getAttribute("data-yasharelink") == g.url) {
//				f.innerHTML = g.counter || "";
//				if (g.counter) {
//					am(h, "b-share-btn__counter")
//				} else {
//					ar(h, "b-share-btn__counter")
//				}
//			} else {}
//        };


        this.showCounter = function (g) {
            $(".b-share-btn__" + g.service + " .b-share-counter").each(function () {
                var f = $(this)[0], h = $(this).parents(".b-share-btn__" + g.service)[0];
                if (f && a._block.getAttribute("data-yasharelink") == g.url) {
                    f.innerHTML = g.counter || "";
                    if (g.counter) {
                        am(h, "b-share-btn__counter")
                    } else {
                        ar(h, "b-share-btn__counter")
                    }
                }
            });
        };
		aG(function () {
			var f = ak(b, e);
			b = null;
			if (!f) {
				return
			}
			a._block = f[0];
			a._loaded = true
		})
	};

	Ya.share.prototype = {
		updateShareLink: function (d, c, a) {
			if (!this._loaded) {
				return this
			}
			var g,
				h,
				j,
				f,
				b = "",
				i = "";
			if (arguments.length == 1 && typeof arguments[0] == "object") {
				var e = arguments[0];
				d = e.link || W.location.toString();
				c = e.title || aD.title;
				b = e.description || "";
				i = e.image || "";
				a = e.serviceSpecific || {}
			} else {
				d = d || W.location.toString();
				c = c || aD.title;
				a = a || {}
			}
			j = V(this._block, "b-share__link");
			for (g = 0, h = j.length; g < h; g++) {
				f = j[g].getAttribute("data-service");
				j[g].href = aB(f, aj(f, "link", d, a), aj(f, "title", c, a), aj(f, "description", b, a), aj(f, "image", i, a))
			}
			return this
		}
	};
	aG(function () {
		var f = V(aD.body, "yashare-auto-init"),
			b = 0,
			d = f.length,
			a,
			c,
			e,
			g;
		for (; b < d; b++) {
			a = f[b];
			c = a.getAttribute("data-yashareQuickServices");
			e = a.getAttribute("data-yasharePopupServices");
			if (typeof c === "string") {
				c = c.split(",")
			} else {
				c = null
			}
			g = {
				element: a,
				theme: a.getAttribute("data-yashareTheme"),
				l10n: a.getAttribute("data-yashareL10n"),
				image: a.getAttribute("data-yashareImage"),
				link: a.getAttribute("data-yashareLink"),
				title: a.getAttribute("data-yashareTitle"),
				description: a.getAttribute("data-yashareDescription"),
				elementStyle: {
					type: a.getAttribute("data-yashareType"),
					quickServices: c
				}
			};
			if (e && typeof e === "string") {
				e = e.split(",");
				g.popupStyle = {
					blocks: e
				}
			}
			new Ya.share(g)
		}
	});
	function ad(a) {
		return (a || "").replace(/</g, "&lt;").replace(/"/g, "&quot;")
	}
})(window, document);

$(document).ready(function() {

    $(".top-bar").append('<div id="top-link-social" class="all_top-link-social">\
    	<div class="left">\
    		<noindex>\
				<div id = "my-ya-share">\
					<div class="b-share_theme_counter"><span class="b-share">\
						<span class="b-share-btn__wrap"><span class="b-share__handle b-share__link b-share-btn__twitter" data-service="twitter"><span class="b-share-icon b-share-icon_twitter"></span></span></span>\
						<span class="b-share-btn__wrap"><span class="b-share__handle b-share__link b-share-btn__facebook"><span class="b-share-icon b-share-icon_facebook"></span></span></span>\
						<span class="b-share-btn__wrap"><span class="b-share__handle b-share__link b-share-btn__gplus"><span class="b-share-icon b-share-icon_gplus"></span></span></span>\
						<span class="b-share-btn__wrap"><span class="b-share__handle b-share__link b-share-btn__odnoklassniki"><span class="b-share-icon b-share-icon_odnoklassniki"></span></span></span>\
						<span class="b-share-btn__wrap"><span class="b-share__handle b-share__link b-share-btn__vkontakte"><span class="b-share-icon b-share-icon_vkontakte"></span></span></span></span>\
					</div>\
				</div>\
				<div class="yashare-auto-init" data-yashareLink="" data-yashareTitle="" data-yashareDescription="" data-yashareQuickServices="twitter,facebook,gplus,odnoklassniki,vkontakte" data-yashareTheme="counter" data-yashareType="big"></div>\
			</noindex>\
		</div>\
	</div>');    

	$("#my-ya-share").hide();
	$("#my-ya-share2").hide();
	$("#scroll-button").click(function() {
		$('html, body').animate({scrollTop: $(".com-counter").offset().top}, 500);
	});

    var counter= 30;
	var timer = setInterval(function() {

		if (!$('#top-link-social .b-share-btn__facebook').children('.b-share-counter').is(':empty')){
			$('#top-link-social .b-share-btn__facebook').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__facebook').children('.b-share-icon').css("margin-top", "34px");
		} 
		if (!$('#top-link-social .b-share-btn__vkontakte').children('.b-share-counter').is(':empty')) {
			$('#top-link-social .b-share-btn__vkontakte').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__vkontakte').children('.b-share-icon').css("margin-top", "34px");
		}   
		if (!$('#top-link-social .b-share-btn__odnoklassniki').children('.b-share-counter').is(':empty')) {
			$('#top-link-social .b-share-btn__odnoklassniki').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__odnoklassniki').children('.b-share-icon').css("margin-top", "34px");
		}   
		if (!$('#top-link-social .b-share-btn__gplus').children('.b-share-counter').is(':empty')) {
			$('#top-link-social .b-share-btn__gplus').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__gplus').children('.b-share-icon').css("margin-top", "34px");
		}   
		if (!$('#top-link-social .b-share-btn__twitter').children('.b-share-counter').is(':empty')) {
			$('#top-link-social .b-share-btn__twitter').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__twitter').children('.b-share-icon').css("margin-top", "34px");
		}
		if (!$('#top-link-social .b-share-btn__comments').children('.b-share-counter').is(':empty')) {
			$('#top-link-social .b-share-btn__comments').children('.b-share-counter').show();
			$('#top-link-social .b-share-btn__comments').children('.b-share-icon').css("margin-top", "34px");
		}
        counter--;
        if (counter <= 0){
            clearInterval(timer)
        }

	}, 1000);

	setTimeout(function() {
		$("#top-link-social .b-share__handle").click(function(){
			$(this).children('.b-share-counter').show();
			$(this).children('.b-share-icon').css("margin-top", "34px");
		});
	}, 500);

	$(".all_top-link-social .my_kp_bkm img").css({
        width : "30px",
        height: "30px"
    });

	if($('.com-counter span').text()*1 > 0) {$('#comments-comments').html($('.com-counter span').text()); }
	else { $('#comments-comments').hide(); $('.b-share-icon_comments').css("margin-top", "0"); }

    window.tlogoIsShown = 0;
});

$(window).scroll(function() {
	//if ($('body').css("background-image") == "none") {
    if ($(window).scrollTop() > 353) {
        if (window.tlogoIsShown === 0) {
            $.tmpl($("#template")).prependTo(".b-share");
            window.tlogoIsShown = 1;
        }    
		  $('#top-link-social').fadeIn();
	  }  else {
		  $('#top-link-social').fadeOut();
	  }
	//}
});