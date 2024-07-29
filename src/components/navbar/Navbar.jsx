'use client';

import React, { useContext } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Authentication from '../authentication/Authentication';
import { ThemeContext } from '@/context/ThemeContext';

const Navbar = () => {
	const { theme, toggle } = useContext(ThemeContext);
	return (
		<div className={styles.container}>
			<Image
				width={0}
				height={0}
				className={styles.logoImage}
				src={theme === 'dark' ? '/dovixon-nobg.png' : '/dovixon-black-nobg.png'}
				sizes="100vw"
			/>
			<div
				className={styles.divider}
				style={
					theme === 'dark'
						? { borderRight: '2px solid #F0B814' }
						: { borderRight: '2px solid black' }
				}
			/>
			<div className={styles.links}>
				<Link className={styles.link} href={'/homepage'}>
					Homepage
				</Link>
				<Link className={styles.link} href={'/contact'}>
					Contact
				</Link>
				<Link className={styles.link} href={'/about'}>
					About
				</Link>
				<Authentication />
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Navbar;
