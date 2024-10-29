"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = require("react");
require("./modal.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Function to render a modal
 * @param {JSX.Element} children - Children of modal
 * @param {Function} closeModal - Function to close modal
 * @param {String} title - Title of modal
 * @param {String} className - Class of modal
 * @param {String} id - ID of modal
 * @param {Boolean} sidebar - Flag to determine if the modal is a sidebar
 * @returns {JSX.Element}
 */
function Modal(_ref) {
  var children = _ref.children,
    closeModal = _ref.closeModal,
    title = _ref.title,
    className = _ref.className,
    id = _ref.id,
    _ref$sidebar = _ref.sidebar,
    sidebar = _ref$sidebar === void 0 ? false : _ref$sidebar;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var modalRef = (0, _react.useRef)(null);
  var modalClassName = "".concat(sidebar ? "modal-sidebar" : "modal", " ").concat(className || "");

  /**
   * UEF to update isOpen
   */
  (0, _react.useEffect)(function () {
    setIsOpen(true);
  }, []);

  /**
   * Function to close modal
   */
  var handleCloseModal = function handleCloseModal() {
    setIsOpen(false);
    closeModal && closeModal();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "overlay-modal ".concat(isOpen ? "visible" : "hidden")
  }, /*#__PURE__*/React.createElement("div", {
    className: modalClassName,
    id: id,
    ref: modalRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, title ? /*#__PURE__*/React.createElement("h2", null, title) : /*#__PURE__*/React.createElement("span", {
    className: "blank"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleCloseModal,
    type: "button",
    className: "btn-close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children)));
}