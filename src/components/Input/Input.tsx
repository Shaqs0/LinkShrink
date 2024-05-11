import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

export function Input() {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleButtonClick = () => {
		// Make a request for a user with a given ID
		axios.get(`${PREFIX}`)
			.then(function (response) {
				// handle success
				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};

	return (
		<div>
			<div className={styles['input_container']}>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					className={styles['input']}
					placeholder='Введите ссылку, которую нужно сократить'
				/>
				<Button
					onClick={handleButtonClick}
					disabled={!inputValue}
					className={styles['btn']}
					appearence='small'
				>
                    Сократить
				</Button>
			</div>
		</div>
	);
}