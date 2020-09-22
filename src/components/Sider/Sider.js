import React from 'react';
import classes from './Sider.module.css';
import SlotManager from './SlotManager/SlotManager';
import JoinSlot from './JoinSlot/JoinSlot';
import Preferences from './Preferences/Preferences';

const Sider = () => {
	return (
		<div className={classes.Sider}>
			<Preferences />
			<SlotManager />
			<JoinSlot />
		</div>
	);
};

export default Sider;
