import React from 'react';
import styles from './pagination.module.css';
function Pagination() {
	return (
		<div className={styles.container}>
			<div className={styles.button}>Previous</div>
			<div className={styles.button}>Next</div>
		</div>
	);
}

export default Pagination;
