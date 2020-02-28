(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./resources/js/components/Widgets/LatestPost.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Widgets/LatestPost.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LatestPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
/* harmony import */ var Components_RctCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Components/RctCard */ "./resources/js/components/RctCard/index.js");
/* harmony import */ var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Components/RctSectionLoader/RctSectionLoader */ "./resources/js/components/RctSectionLoader/RctSectionLoader.js");
/* harmony import */ var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Util/IntlMessages */ "./resources/js/util/IntlMessages.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Latest Post Widget
 */








 // api

 //Helper

 // card component

 // rct section loader

 // intl messages


class LatestPost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      blogPostData: null,
      sectionReload: false,
      snackbar: false,
      snackbarMessage: '',
      editPostModal: false,
      editPost: null,
      addNewPostForm: false,
      addNewPostDetails: {
        body: '',
        title: '',
        id: null,
        date: null,
        thumbnail: ''
      }
    };

    this.toggleEditPostModal = () => {
      this.setState({
        editPostModal: !this.state.editPostModal
      });
    };
  }

  componentDidMount() {
    this.getBlogData();
  } // get Blog Data


  getBlogData() {
    this.setState({
      sectionReload: true
    });
    Api__WEBPACK_IMPORTED_MODULE_9__["default"].get('blogData.js').then(response => {
      this.setState({
        blogPostData: response.data,
        sectionReload: false
      });
    }).catch(error => {
      this.setState({
        blogPostData: null,
        sectionReload: false
      });
    });
  }
  /**
      * On Delete Post
    */


  onDeletePost(e, post) {
    e.stopPropagation();
    this.setState({
      sectionReload: true
    });
    let posts = this.state.blogPostData;
    let index = posts.indexOf(post);
    let self = this;
    setTimeout(() => {
      posts.splice(index, 1);
      self.setState({
        blogPostData: posts,
        sectionReload: false,
        snackbar: true,
        snackbarMessage: 'Post Has Been Moved To Trash'
      });
    }, 1500);
  } // edit Post


  onEditPost(data) {
    this.setState({
      editPostModal: true,
      editPost: data,
      addNewPostForm: false
    });
  } // toggle edit Post modal


  // submit Post edit form
  onSubmitPostEditDetailForm() {
    const {
      editPost,
      blogPostData
    } = this.state;

    if (editPost.title !== '' && editPost.body !== '') {
      this.setState({
        editPostModal: false,
        sectionReload: true
      });
      let indexOfPost;

      for (let i = 0; i < blogPostData.length; i++) {
        const post = blogPostData[i];

        if (post.id === editPost.id) {
          indexOfPost = i;
        }
      }

      let self = this;
      setTimeout(() => {
        self.setState({
          sectionReload: false,
          snackbar: true,
          snackbarMessage: 'Post Updated Successfully'
        });
        self.setState({
          blogPostData: react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(blogPostData, {
            [indexOfPost]: {
              $set: editPost
            }
          })
        });
      }, 1500);
    }
  } // on change Post details


  onChangePostDetails(key, value) {
    this.setState({
      editPost: _objectSpread({}, this.state.editPost, {
        [key]: value
      })
    });
  } // add new Post


  addNewPost() {
    this.setState({
      editPostModal: true,
      addNewPostForm: true,
      editPost: null,
      addNewPostDetails: {
        body: '',
        title: '',
        id: null,
        comments: 0,
        views: 0,
        likes: 0,
        thumbnail: "http://via.placeholder.com/63X63"
      }
    });
  } // on change Post add new form value


  onChangePostAddNewForm(key, value) {
    this.setState({
      addNewPostDetails: _objectSpread({}, this.state.addNewPostDetails, {
        [key]: value
      })
    });
  } // on submit add new Post form


  onSubmitAddNewPostForm() {
    const {
      addNewPostDetails
    } = this.state;

    if (addNewPostDetails.title !== '' && addNewPostDetails.body !== '') {
      this.setState({
        editPostModal: false,
        sectionReload: true
      });
      let newPost = addNewPostDetails;
      newPost.date = new Date().getTime() / 1000;
      let newPosts = this.state.blogPostData;
      let self = this;
      setTimeout(() => {
        newPosts.push(newPost);
        self.setState({
          blogPostData: newPosts,
          sectionReload: false,
          snackbar: true,
          snackbarMessage: 'Post Added Successfully'
        });
      }, 1500);
    }
  }

  render() {
    const {
      editPostModal,
      addNewPostForm,
      editPost,
      snackbar,
      successMessage,
      addNewPostDetails
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog-list-wrap"
    }, this.state.sectionReload && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
      className: "rct-scroll",
      autoHeight: true,
      autoHeightMin: 100,
      autoHeightMax: 600,
      autoHide: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "p-0"
    }, this.state.blogPostData && this.state.blogPostData.map((data, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      button: true,
      className: "post-item align-items-center justify-content-between py-25"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-content d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-img mr-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.thumbnail,
      alt: "post-img",
      className: "img-fluid"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "meta-info fs-12 text-muted mb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-15 d-inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-time mr-5"
    }), Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["getTheDate"])(data.date, 'DD MMM YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-15 d-inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-comment mr-5"
    }), data.comments, " comments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-15 d-inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-favorite mr-5"
    }), data.likes, " Likes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-15 d-inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-eye mr-5"
    }), data.views, " Views")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0"
    }, data.body))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex hover-action"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
      variant: "round",
      size: "small",
      className: "btn-success text-white m-5",
      onClick: () => this.onEditPost(data)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-edit"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
      variant: "round",
      size: "small",
      className: "btn-danger text-white m-5",
      onClick: e => this.onDeletePost(e, data)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "zmdi zmdi-delete"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_11__["RctCardFooter"], {
      customClasses: "d-flex justify-content-between align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.addNewPost()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "widgets.addNew"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fs-12 text-base"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "mr-15 zmdi zmdi-refresh"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "widgets.updated10Minago"
    }))), editPostModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      isOpen: editPostModal,
      toggle: this.toggleEditPostModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
      toggle: this.toggleEditPostModal
    }, addNewPostForm ? 'Add New Post' : 'Edit Post'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, addNewPostForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      for: "postTitle"
    }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "text",
      name: "name",
      id: "postTitle",
      value: addNewPostDetails.title,
      onChange: e => this.onChangePostAddNewForm('title', e.target.value)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      for: "postBody"
    }, "Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "textarea",
      name: "textarea",
      id: "postBody",
      value: addNewPostDetails.body,
      onChange: e => this.onChangePostAddNewForm('body', e.target.value)
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      for: "postTitle"
    }, "Tilte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "text",
      name: "title",
      id: "postTitle",
      value: editPost.title,
      onChange: e => this.onChangePostDetails('title', e.target.value)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      for: "postContent"
    }, "Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "textarea",
      name: "content",
      id: "postContent",
      value: editPost.body,
      onChange: e => this.onChangePostDetails('body', e.target.value)
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], null, addNewPostForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.onSubmitAddNewPostForm()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "button.add"
    })), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      className: "btn-danger text-white",
      onClick: this.toggleEditPostModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "button.cancel"
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      className: "text-white",
      onClick: () => this.onSubmitPostEditDetailForm()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "button.update"
    })), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      className: "btn-danger text-white",
      onClick: this.toggleEditPostModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "button.cancel"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      open: this.state.snackbar,
      onClose: () => this.setState({
        snackbar: false
      }),
      autoHideDuration: 2000,
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id"
      }, this.state.snackbarMessage)
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LatestPost, "LatestPost", "E:\\02_web\\05_laravel\\projects\\01_first\\resources\\js\\components\\Widgets\\LatestPost.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);