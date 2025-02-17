'use client';

import React, { useState } from 'react';
import styles from './authentication.module.css';
import Link from 'next/link';

function Authentication() {
	const [open, setOpen] = useState(false);
	const status = 'not-authenticated';
	return (
		<>
			{status === 'not-authenticated' ? (
				<Link href="/login" className={styles.link}>
					Login
				</Link>
			) : (
				<>
					<Link href="/write" className={styles.link}>
						Write
					</Link>
					<span className={styles.link}>Logout</span>
				</>
			)}

			<div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			{open && (
				<div className={styles.responsiveMenu}>
					<Link href="/homepage">Homepage</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
					{status === 'not-authenticated' ? (
						<Link href="/login">Login</Link>
					) : (
						<>
							<Link href="/write">Write</Link>
							<span className={styles.link}>Logout</span>
						</>
					)}
				</div>
			)}
		</>
	);
}

export default Authentication;
