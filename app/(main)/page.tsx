'use client'
import ModalWindow from '@/components/common/ModalWindow';
import CategoryForm from '@/components/forms/CategoryForm/CategoryForm';
import React, { useState } from 'react';

const Home = () => {
	const [modal, setModal] = useState(true)
	const closeModal = () => { setModal(false) }
	const openModal = () => { setModal(true) }
	return (
		<main>
			{
				modal && (
					<ModalWindow title='Crear nueva categoría' close={closeModal}>
						<CategoryForm/>
					</ModalWindow>
				)
			}
			<button onClick={openModal}>Open Modal</button>
			<h1>algo</h1>
		</main>
	);
};

export default Home;
