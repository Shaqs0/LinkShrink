import styles from './SociaMediaPopup.module.css';

export function SociaMediaPopup() {

	return (
		<div className={styles.popup}>
			<ul className={styles.socialMediaList}>
				<li>Социальная сеть 1</li>
				<li>Социальная сеть 2</li>
				<li>Социальная сеть 3</li>
			</ul>
		</div>
	);
}