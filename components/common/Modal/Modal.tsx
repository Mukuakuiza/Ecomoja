/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import * as React from 'react';
import { default as cn } from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';

type ModalProps = {
	children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
	const { isModalOpen, dispatch } = React.useContext(UIContext);

	const handleModalAreClick = () => {
		dispatch({ type: 'TOGGLE_MODAL' });
	};

	return (
		<div
			className={cn(
				'h-full w-full absolute inset-0 z-40 bg-black bg-opacity-75',
				{ hidden: !isModalOpen },
			)}
			onClick={handleModalAreClick}
		>
			{children}
		</div>
	);
};

export default Modal;
