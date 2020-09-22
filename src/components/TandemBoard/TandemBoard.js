import React from 'react';
import './TandemBoard.module.css';
import { Calendar } from 'antd';
import classes from './TandemBoard.module.css';

const TandemBoard = () => {
	return (
		<div className={classes.TandemBoard}>
			<Calendar />
		</div>
	);
};

export default TandemBoard;
