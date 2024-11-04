"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Renders a modal component.
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.children - Content to display inside the modal.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {String} [props.title=""] - Title of the modal.
 * @param {String} [props.className=""] - Additional classes for modal styling.
 * @param {String} [props.id] - Optional ID for the modal.
 * @returns {JSX.Element} The modal component.
 */
function Modal(_ref) {
  var children = _ref.children,
    closeModal = _ref.closeModal,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? undefined : _ref$id;
  var modalClassName = "modal ".concat(className);

  /**
   * Handles closing the modal.
   */
  var handleCloseModal = function handleCloseModal() {
    if (closeModal) closeModal();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay-modal visible",
    onClick: handleCloseModal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassName,
    id: id,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, title && /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCloseModal,
    type: "button",
    className: "btn-close"
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children)));
}

// Définir les valeurs par défaut dans defaultProps (si pas de TypeScript)
Modal.defaultProps = {
  title: null,
  className: "",
  id: undefined
};