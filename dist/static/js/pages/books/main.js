global.webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_641f765d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_641f765d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/TopSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-641f765d", Component.options)
  } else {
    hotAPI.reload("data-v-641f765d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: ['tops'],
  computed: {
    imgUrls: function imgUrls() {
      var res = this.tops;
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)];
    }
  },
  methods: {
    bookDetail: function bookDetail(item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      });
    }
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": true,
      "indicator-color": "#ea5a49",
      "autoplay": true,
      "interval": 6000,
      "duration": 1000,
      "circular": true
    }
  }, _vm._l((_vm.imgUrls), function(top, imgindex) {
    return _c('div', {
      key: imgindex
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + imgindex
      }
    }, _vm._l((top), function(img, index) {
      return _c('img', {
        key: img.id,
        staticClass: "slide-image",
        attrs: {
          "mode": "aspectFit",
          "src": img.image,
          "alt": "",
          "eventid": '0-' + imgindex + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.bookDetail(img)
          }
        }
      })
    }))], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-641f765d", esExports)
  }
}

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('TopSwiper', {
    attrs: {
      "tops": _vm.tops,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.books), function(book, index) {
    return _c('Card', {
      key: book.id,
      attrs: {
        "book": book,
        "mpcomid": '1-' + index
      }
    })
  }), _vm._v(" "), (!this.more) ? _c('p', {
    staticClass: "text-footer"
  }, [_vm._v("\n    没有更多数据\n  ")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e8d0c82", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Book__ = __webpack_require__(93);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Book__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Book_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e8d0c82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Book_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Book_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e8d0c82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Book_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/books/Book.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Book.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e8d0c82", Component.options)
  } else {
    hotAPI.reload("data-v-5e8d0c82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Card__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__ = __webpack_require__(102);


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

// page 当前第几页
// 没有更多数据
// 1、page=0 不能显示这条提醒
// 2、page>0 数据长度<10 停止触底加载





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_3__components_Card__["a" /* default */],
    TopSwiper: __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__["a" /* default */]
  },
  data: function data() {
    return {
      books: [],
      page: 0,
      more: true,
      pagesize: 10,
      tops: []
    };
  },

  methods: {
    getList: function getList(init) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var books;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (init) {
                  _this.page = 0;
                }
                wx.showNavigationBarLoading();
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/booklist', {
                  page: _this.page,
                  pagesize: _this.pagesize
                });

              case 4:
                books = _context.sent;

                if (_this.books.length < _this.pagesize && _this.page > 0) {
                  _this.more = false;
                }
                if (init) {
                  _this.books = books.list;
                  wx.stopPullDownRefresh();
                } else {
                  // 下拉刷新，不能直接覆盖books.list 而是累加
                  _this.books = _this.books.concat(books.list);
                }
                wx.hideNavigationBarLoading();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getTop: function getTop() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var tops;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/top');

              case 2:
                tops = _context2.sent;

                _this2.tops = tops.list;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  onReachBottom: function onReachBottom() {
    if (!this.more) {
      // 没有更多
      return false;
    }
    this.page = this.page + 1;
    this.getList(false);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getList(true);
    this.getTop();
  },
  mounted: function mounted() {
    this.getList(true);
    this.getTop();
  }
});

/***/ })

},[92]);
//# sourceMappingURL=main.js.map