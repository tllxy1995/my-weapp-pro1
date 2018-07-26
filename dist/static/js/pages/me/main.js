global.webpackJsonp([1],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(125);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7cc6ad8b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7cc6ad8b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cc6ad8b", Component.options)
  } else {
    hotAPI.reload("data-v-7cc6ad8b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_YearProgress__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(43);


//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    YearProgress: __WEBPACK_IMPORTED_MODULE_3__components_YearProgress__["a" /* default */]
  },
  data: function data() {
    return {
      userinfo: {
        avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nickName: ''
      }
    };
  },

  methods: {
    addBook: function addBook(isbn) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* post */])('/weapp/addbook', {
                  isbn: isbn,
                  openid: _this.userinfo.openId
                });

              case 2:
                res = _context.sent;

                console.log(res);
                Object(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* showModal */])('添加成功', res.title + '\u6DFB\u52A0\u6210\u529F');

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    scanBook: function scanBook() {
      var _this2 = this;

      wx.scanCode({
        success: function success(res) {
          if (res.result) {
            _this2.addBook(res.result);
          }
        }
      });
    },

    getWxLogin: function getWxLogin(_ref) {
      var encryptedData = _ref.encryptedData,
          iv = _ref.iv,
          userinfo = _ref.userinfo;

      var self = this;
      wx.login({
        success: function success(loginResult) {
          console.log('loginResult', loginResult);
          var loginParams = {
            code: loginResult.code,
            encryptedData: encryptedData,
            iv: iv
          };
          __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].loginUrl);
          __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default.a.requestLogin({
            loginParams: loginParams,
            success: function success() {
              console.log(2222);
              __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default.a.request({
                url: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].userUrl,
                login: true,
                success: function success(userRes) {
                  console.log(userRes);
                  Object(__WEBPACK_IMPORTED_MODULE_4__util__["d" /* showSuccess */])('登录成功');
                  wx.setStorageSync('userinfo', userRes.data.data);
                  self.userinfo = userRes.data.data;
                }
              });
            },
            fail: function fail(err) {
              console.log(err);
              Object(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* showModal */])('登录失败', err.message);
            }
          });
        },
        fail: function fail(loginErr) {
          console.log(loginErr);
          Object(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* showModal */])('登录失败', '');
        }
      });
    },

    login: function login(e) {
      console.log(e);
      var self = this;
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          // 授权信息里有用户信息
          if (res.authSetting['scope.userInfo']) {
            console.log(res);
            // 检查用户登录是否过期
            wx.checkSession({
              success: function success() {
                console.log(self.userinfo);
                if (self.userinfo.openid) {
                  // 没过期 直接成功
                  Object(__WEBPACK_IMPORTED_MODULE_4__util__["d" /* showSuccess */])('登录成功');
                } else {
                  __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default.a.clearSession();
                  // 登录态已过期，需重新登录
                  // 登录需要的加密信息
                  var options = {
                    encryptedData: e.mp.detail.encryptedData,
                    iv: e.mp.detail.iv,
                    userinfo: e.mp.detail.userInfo
                  };
                  self.getWxLogin(options);
                }
              },
              fail: function fail() {
                // 过期了 重新登录 先清楚登录的状态
                __WEBPACK_IMPORTED_MODULE_2_wafer2_client_sdk___default.a.clearSession();
                // 登录态已过期，需重新登录
                // 登录需要的加密信息
                var options = {
                  encryptedData: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  userinfo: e.mp.detail.userInfo
                };
                self.getWxLogin(options);
              }

            });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* showModal */])('用户未授权', e.mp.detail.errMsg);
          }
        }

      });
    }
  },
  onShow: function onShow() {
    console.log(123);
    var userinfo = wx.getStorageSync('userinfo');
    // console.log([userinfo])
    if (userinfo) {
      this.userinfo = userinfo;
    }
    // console.log(this.userinfo)
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_de58efec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_de58efec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/YearProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de58efec", Component.options)
  } else {
    hotAPI.reload("data-v-de58efec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    isLeapYear: function isLeapYear() {
      var year = new Date().getFullYear();
      if (year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    getDayOfYear: function getDayOfYear() {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    year: function year() {
      return new Date().getFullYear();
    },
    days: function days() {
      var start = new Date();
      start.setMonth(0);
      start.setDate(1);
      // start就是今年第一天
      // 今天的时间戳 - 今年第一天的时间戳
      var offset = new Date().getTime() - start.getTime();
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1;
    },
    percent: function percent() {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1);
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progressbar"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.percent,
      "activeColor": "#ea5a49"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.year) + "已经过去" + _vm._s(_vm.days) + "天," + _vm._s(_vm.percent) + "%")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de58efec", esExports)
  }
}

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.userinfo.nickName))])], 1), _vm._v(" "), _c('YearProgress', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.userinfo.openId) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.scanBook
    }
  }, [_vm._v("添加图书")]) : _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.login
    }
  }, [_vm._v("点击登录")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cc6ad8b", esExports)
  }
}

/***/ })

},[124]);
//# sourceMappingURL=main.js.map