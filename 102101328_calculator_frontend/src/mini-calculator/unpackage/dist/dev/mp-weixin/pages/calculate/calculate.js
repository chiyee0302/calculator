(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/calculate/calculate"],{

/***/ 34:
/*!*********************************************************************************************!*\
  !*** D:/开发工具/HBuilderX/项目/mini-calculator/main.js?{"page":"pages%2Fcalculate%2Fcalculate"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _calculate = _interopRequireDefault(__webpack_require__(/*! ./pages/calculate/calculate.vue */ 35));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_calculate.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 35:
/*!**************************************************************************!*\
  !*** D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate.vue?vue&type=template&id=be65e2d8& */ 36);
/* harmony import */ var _calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate.vue?vue&type=script&lang=js& */ 38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate.vue?vue&type=style&index=0&lang=css& */ 40);
/* harmony import */ var _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/calculate/calculate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/*!*********************************************************************************************************!*\
  !*** D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=template&id=be65e2d8& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./calculate.vue?vue&type=template&id=be65e2d8& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_template_id_be65e2d8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 37:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=template&id=be65e2d8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 38:
/*!***************************************************************************************************!*\
  !*** D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./calculate.vue?vue&type=script&lang=js& */ 39);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 39:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MyNavigationbarVue = function MyNavigationbarVue() {
  __webpack_require__.e(/*! require.ensure | components/MyNavigationbar */ "components/MyNavigationbar").then((function () {
    return resolve(__webpack_require__(/*! ../../components/MyNavigationbar.vue */ 58));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
//import calc from 'calculate.js'
var _default = {
  data: function data() {
    return {
      is_show: true,
      to_calculate_string: "",
      calculate_string: "",
      ans: "0",
      is_new: 1,
      history_hide: true,
      //历史记录
      history_list: [{}],
      //按钮
      button_items: [{
        id: "clear",
        value: "C",
        item_type: "function"
      }, {
        id: "mod",
        value: "%",
        item_type: "function"
      }, {
        id: "backspace",
        value: "Back",
        item_type: "function"
      }, {
        id: "divide",
        value: "÷",
        item_type: "operation"
      }, {
        id: "7",
        value: "7",
        item_type: "number"
      }, {
        id: "8",
        value: "8",
        item_type: "number"
      }, {
        id: "9",
        value: "9",
        item_type: "number"
      }, {
        id: "×",
        value: "×",
        item_type: "operation"
      }, {
        id: "4",
        value: "4",
        item_type: "number"
      }, {
        id: "5",
        value: "5",
        item_type: "number"
      }, {
        id: "6",
        value: "6",
        item_type: "number"
      }, {
        id: "sub",
        value: "-",
        item_type: "operation"
      }, {
        id: "1",
        value: "1",
        item_type: "number"
      }, {
        id: "2",
        value: "2",
        item_type: "number"
      }, {
        id: "3",
        value: "3",
        item_type: "number"
      }, {
        id: "add",
        value: "+",
        item_type: "operation"
      }, {
        id: "history",
        value: "Ans",
        item_type: "function"
      }, {
        id: "0",
        value: "0",
        item_type: "number"
      }, {
        id: "dot",
        value: ".",
        item_type: "number"
      }, {
        id: "equal",
        value: "=",
        item_type: "function"
      }]
    };
  },
  components: {
    MyNavigationbarVue: MyNavigationbarVue
  },
  methods: {
    math_trans: function math_trans(v) {
      // 添加你的数学转换逻辑  
      if (v === '×') {
        return '*';
      } else if (v === '÷') {
        return '/';
      }
      return v;
    },
    //返回历史记录
    get_history: function get_history() {
      var _this = this;
      this.history_hide = !this.history_hide;
      console.log(this.history_hide);
      fetch('http://localhost:9090/calc/history', {
        method: 'GET'
      }).then(function (response) {
        if (!response.ok) {
          console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(function (data) {
        //返回前十个历史内容
        _this.history_list = data.history_list;
        console.log(_this.history_list);
      }).catch(function (error) {
        console.error('请求出错:', error);
        // 这里可以添加更多的错误处理逻辑  
      });
    },
    //删除
    delete_input: function delete_input() {
      this.ans = this.ans.slice(0, -1);
      this.to_calculate_string = this.to_calculate_string.slice(0, -1);
      if (this.ans === "") {
        this.ans = 0;
      }
      return;
    },
    //按下等号为get,创建为post，修改为put
    click_button: function click_button(item) {
      var _this2 = this;
      console.log(item);
      //定义一个发送的对象
      var tran_data = {
        calc_s: this.calculate_string,
        to_calc_s: this.to_calculate_string
      };
      //如果按下的是等号
      if (item.value === '=') {
        this.is_new = 1;
        fetch('http://localhost:9090/calc', {
          method: 'GET'
        }).then(function (response) {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // 或者 response.text()，取决于服务器返回的内容类型  
        }).then(function (data) {
          console.log(data);
          _this2.calculate_string = data.calculate_string;
          _this2.to_calculate_string = data.to_calculate_string;
          _this2.ans = data.ans;
        }).catch(function (error) {
          console.error('请求出错:', error);
          // 这里可以添加更多的错误处理逻辑  
        });

        return;
      }
      //读取历史记录
      else if (item.value === "Ans") {
        this.get_history();
      }
      //清除
      else if (item.value === "C") {
        this.ans = "0";
        is_new = 1;
        this.calculate_string = "";
      } else if (item.value === 'Back') {
        if (this.ans === 0) return;
        this.delete_input();
        //清完了
        //console.log(this.ans);
        if (this.to_calculate_string === "") {
          this.is_new = 1;
          fetch('http://localhost:9090/calc', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(tran_data)
          });
        } else {
          tran_data.calc_s = this.ans;
          tran_data.to_calc_s = this.to_calculate_string;
          fetch('http://localhost:9090/calc', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(tran_data)
          });
        }
      }
      //按下的不是等号
      else if (this.is_new === 1) {
        //创建
        this.ans = item.value;
        tran_data.calc_s = this.ans;
        this.to_calculate_string = this.math_trans(item.value);
        tran_data.to_calc_s = this.to_calculate_string;
        this.is_new = 0;
        fetch('http://localhost:9090/calc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tran_data)
        });
      } else if (this.is_new == 0) {
        //修改
        this.ans += item.value;
        tran_data.calc_s = this.ans;
        this.to_calculate_string += this.math_trans(item.value);
        tran_data.to_calc_s = this.to_calculate_string;
        fetch('http://localhost:9090/calc', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tran_data)
        });
      }
    },
    menu_hide: function menu_hide() {
      this.is_show = true;
      this.history_hide = true;
    },
    getNewData: function getNewData(data) {
      this.is_show = data;
    },
    get_history_item: function get_history_item(e) {
      this.calculate_string = e.calc_s;
      this.ans = e.ans;
      this.history_hide = true;
    }
  } //methods

  //ps：每次等号运算后可以把temp_front设为0，特判temp_front	
};
exports.default = _default;

/***/ }),

/***/ 40:
/*!***********************************************************************************************************!*\
  !*** D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./calculate.vue?vue&type=style&index=0&lang=css& */ 41);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_calculate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/开发工具/HBuilderX/项目/mini-calculator/pages/calculate/calculate.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/calculate/calculate.js.map