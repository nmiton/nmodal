import React from "react";
import "./modal.css";

/**
 * Renders a modal component.
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.children - Content to display inside the modal.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {JSX.Element} [props.title] - Title of the modal.
 * @param {String} [props.className=""] - Additional classes for modal styling.
 * @param {String} [props.id] - Optional ID for the modal.
 * @returns {JSX.Element} The modal component.
 */
const Modal = ({ children = null, closeModal = null, title = null, className = "", id = undefined }) => {
	/**
	 * Handles closing the modal.
	 */
	const handleCloseModal = () => {
		if (closeModal) closeModal();
	};

	if (!children) return null;

	return (
		<div className="modal-overlay" onClick={handleCloseModal}>
			<div className={`modal ${className}`} id={id || undefined} onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					{title}
					<button onClick={handleCloseModal} type="button" className="btn-close">
						&times;
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
