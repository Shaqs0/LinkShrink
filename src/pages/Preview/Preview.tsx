import { Link } from 'react-router-dom';
import styles from './Preview.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { loadState } from '../../store/storage';
import { LINK_PERSISTENT_STATE, setLink, setQrCode } from '../../store/link.slice';

export function Preview() {
	const generatedLink = useSelector((state: RootState) => state.link.generatedLink);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!generatedLink) {
			const savedState = loadState<{ generatedLink: string, qrCode: string }>(LINK_PERSISTENT_STATE);
			if (savedState) {
				dispatch(setLink(savedState.generatedLink));
				dispatch(setQrCode(savedState.qrCode));
			}
		}
	}, [generatedLink, dispatch]);

	return (
		<div>
			<div className={styles['logo']}> 
				<Link to='/'><img src='public/logo_icon.svg' alt="Logo"></img></Link>
				<Link to='/'><p className={styles['logo_name']}>Linksshrink</p></Link>
			</div>
			<div className={styles['preview']}>
				<p className={styles['mod']}>Preview режим</p>
				<p className={styles['link']}>Linksshrink/{generatedLink || 'WOULD-72071'}</p>
				<div className={styles['qr']}>
					{generatedLink ? (
						<img src={`https://linksshrink.ru/${generatedLink}/qr-code-max`} alt="QR Code" />
					) : (
						<img src="public/qr-code-max.png" alt="Default QR Code" />
					)}
				</div>
			</div>
		</div>
	);
}
