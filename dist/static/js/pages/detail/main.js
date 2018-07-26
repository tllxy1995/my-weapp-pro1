global.webpackJsonp([2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Detail__ = __webpack_require__(116);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Detail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7e80b3eb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7e80b3eb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e80b3eb", Component.options)
  } else {
    hotAPI.reload("data-v-7e80b3eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommentList__ = __webpack_require__(46);


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
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BookInfo: __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__["a" /* default */],
    CommentList: __WEBPACK_IMPORTED_MODULE_4__components_CommentList__["a" /* default */]
  },
  data: function data() {
    return {
      comments: [],
      userinfo: {},
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
    };
  },

  methods: {
    getDetail: function getDetail() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var info;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/bookdetail', { id: _this.bookid });

              case 2:
                info = _context.sent;

                wx.setNavigationBarTitle({
                  title: info.title
                });
                _this.info = info;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getGeo: function getGeo(e) {
      var _this2 = this;

      if (e.target.value) {
        // 百度地图api密钥
        var ak = 'PgLjdgTp6c5R8fx1It0zlnvZoREMekFL';
        var url = 'http://api.map.baidu.com/geocoder/v2/';
        wx.getLocation({
          success: function success(geo) {
            console.log(geo);
            wx.request({
              url: url,
              data: {
                ak: ak,
                location: geo.latitude + ', ' + geo.longitude,
                output: 'json'
              },
              success: function success(res) {
                console.log(res);
                if (res.data.status === 0) {
                  _this2.location = res.data.result.addressComponent.city;
                } else {
                  _this2.location = '未能获取地理位置';
                }
              }
            });
          }
        });
      } else {
        this.location = '';
      }
    },
    getPhone: function getPhone(e) {
      if (e.target.value) {
        var phoneInfo = wx.getSystemInfoSync();
        console.log(phoneInfo);
        this.phone = phoneInfo.model;
      } else {
        this.phone = '';
      }
    },
    addComment: function addComment() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this3.comment) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                // 评论内容 地理位置 手机型号 图书id openid
                data = {
                  openid: _this3.userinfo.openId,
                  bookid: _this3.bookid,
                  comment: _this3.comment,
                  location: _this3.location,
                  phone: _this3.phone
                };

                console.log(data);
                _context2.prev = 4;
                _context2.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* post */])('/weapp/addcomment', data);

              case 7:
                _this3.comment = '';
                _this3.getComment();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](4);

                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('失败', _context2.t0.msg);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[4, 11]]);
      }))();
    },
    getComment: function getComment() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var comments;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/commentlist', { bookid: _this4.bookid });

              case 2:
                comments = _context3.sent;

                _this4.comments = comments.list || [];

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    }
  },
  computed: {
    showAdd: function showAdd() {
      var _this5 = this;

      // 没登录
      if (!this.userinfo.openId) {
        return false;
      }
      // 评论页面查到有自己的openid
      if (this.comments.filter(function (v) {
        return v.openid === _this5.userinfo.openId;
      }).length) {
        return false;
      }
      return true;
    }
  },
  mounted: function mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getDetail();
    this.getComment();
    var userinfo = wx.getStorageSync('userinfo');
    console.log(userinfo);
    if (userinfo) {
      this.userinfo = userinfo;
    }
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_44a8f337_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_44a8f337_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/BookInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44a8f337", Component.options)
  } else {
    hotAPI.reload("data-v-44a8f337", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rate__ = __webpack_require__(45);
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
    Rate: __WEBPACK_IMPORTED_MODULE_0__components_Rate__["a" /* default */]
  },
  props: ['info'],
  computed: {
    userinfo: function userinfo() {
      return this.info.user_info || {};
    }
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bookinfo"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": _vm.info.image,
      "mode": "aspectFill",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.info.image,
      "mode": "aspectFit",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.info.title))]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.info.author))])])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userinfo.img,
      "mode": "aspectFit",
      "alt": ""
    }
  }), _vm._v("\n       " + _vm._s(_vm.userinfo.nickName) + "\n      "), _c('div', {
    staticClass: "right text-primary"
  }, [_vm._v("\n        " + _vm._s(_vm.info.rate) + "\n        "), _c('Rate', {
    attrs: {
      "value": _vm.info.rate,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("\n      " + _vm._s(_vm.info.publisher) + "\n      "), _c('div', {
    staticClass: "right"
  }, [_vm._v("\n        " + _vm._s(_vm.info.price) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.info.tags), function(tag, index) {
    return _c('div', {
      key: tag,
      staticClass: "badge"
    }, [_vm._v(_vm._s(tag))])
  })), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, _vm._l((_vm.info.summary), function(sum, i) {
    return _c('p', {
      key: i
    }, [_vm._v("    " + _vm._s(sum))])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44a8f337", esExports)
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('BookInfo', {
    attrs: {
      "info": _vm.info,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('CommentList', {
    attrs: {
      "comments": _vm.comments,
      "mpcomid": '1'
    }
  }), _vm._v(" "), (_vm.showAdd) ? _c('div', {
    staticClass: "comment"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    staticClass: "textarea",
    attrs: {
      "maxlength": 100,
      "placeholder": "请输入图书短评",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_vm._v("\n      地理位置:\n      "), _c('switch', {
    attrs: {
      "color": "#ea5a49",
      "checked": _vm.location,
      "eventid": '1'
    },
    on: {
      "change": _vm.getGeo
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.location))])]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("\n      手机型号:\n      "), _c('switch', {
    attrs: {
      "color": "#ea5a49",
      "checked": _vm.phone,
      "eventid": '2'
    },
    on: {
      "change": _vm.getPhone
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v("评论")])], 1) : _c('div', {
    staticClass: "text-footer"
  }, [_vm._v("未登录或者已经评论过")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("转发")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e80b3eb", esExports)
  }
}

/***/ })

},[115]);
//# sourceMappingURL=main.js.map