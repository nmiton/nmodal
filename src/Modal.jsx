import { useEffect, useRef, useState } from "react";
import "./modal.css";
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
export default function Modal({ children, closeModal, title, className, id, sidebar = false }) {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef(null);
	const modalClassName = `${sidebar ? "modal-sidebar" : "modal"} ${className || ""}`;

	/**
	 * UEF to update isOpen
	 */
	useEffect(() => {
		setIsOpen(true);
	}, []);

	/**
	 * Function to close modal
	 */
	const handleCloseModal = () => {
		setIsOpen(false);
		closeModal && closeModal();
	};

	return (
		<div className={`overlay-modal ${isOpen ? "visible" : "hidden"}`}>
			<div className={modalClassName} id={id} ref={modalRef}>
				<div className="modal-header">
					{title ? <h2>{title}</h2> : <span className="blank"></span>}
					<button onClick={handleCloseModal} type="button" className="btn-close">
						&times;
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
}
