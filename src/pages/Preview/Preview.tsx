import { Link, useParams } from 'react-router-dom';
import styles from './Preview.module.css';

export function Preview() {
	const { generatedLink } = useParams<{ generatedLink: string }>();

	return <div>
		<div className={styles['logo']}> 
			<Link to='/'><img src='public/logo_icon.svg'></img></Link>
			<Link to='/'><p className={styles['logo_name']}>Linksshrink</p></Link>
		</div>
		<div className={styles['preview']}>
			<p className={styles['mod']}>Preview режим</p>
			<p className={styles['link']}>Linksshrink/{generatedLink || 'SOAPY-80333'}</p>
			<div className={styles['qr']}>
				<img src="public/qr-code.png" alt="Default QR Code" />
			</div>
		</div>
        
	</div>;
}