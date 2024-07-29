'use client';

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

function ThemeToggle() {
	const { theme, toggle } = useContext(ThemeContext);

	return (
		<div
			className={styles.container}
			onClick={toggle}
			style={
				theme === 'dark' ? { background: 'white' } : { background: '#0f172a' }
			}
		>
			<Image src="/moon.png" alt="" width={14} height={14} />
			<div
				className={styles.ball}
				style={{
					transform: theme === 'dark' ? 'translateX(0)' : 'translateX(21px)',
					background: theme === 'dark' ? '#0f172a' : 'white',
				}}
			></div>
			<Image src="/sun.png" alt="" width={14} height={14} />
		</div>
	);
}

export default ThemeToggle;
