import { Link } from 'react-router-dom';
import styles from './SociaMediaPopup.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function SociaMediaPopup() {
	const generatedLink = useSelector((state: RootState) => state.link.generatedLink);


	return (
		<div className={styles.popup}>
			<p className={styles.text}>Поделиться ссылкой</p>
			<ul className={styles.socialMediaList}>
				<li>
					<Link to={`https://telegram.me/share/url?url=linksshrink.ru/${generatedLink}`}>
						<img src="public/tg_icon.svg" alt="Telegram Icon" />Телеграм
					</Link>
				</li>
				<li>
					<Link to={`https://vk.com/share.php?url=linksshrink.ru/${generatedLink}`}>
						<img src="public/vk_icon.svg" alt="VK Icon" />Вконтакте
					</Link>
				</li>
				<li>
					<Link to={`https://connect.ok.ru/offer?url=linksshrink.ru/${generatedLink}`}>
						<img src="public/ok_icon.svg" alt="OK Icon" />Одноклассники
					</Link>
				</li>
			</ul>
		</div>
	);
}
