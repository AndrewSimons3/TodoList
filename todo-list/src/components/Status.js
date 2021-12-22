import React from 'react';
import classes from './Status.module.css';

const Status = props => {
  return (
		<div className={`${classes.status} ${props.display ? classes.statusDark : ''}`}>
			<span className={classes.all}>All</span>
			<span
				className={`${classes.active} ${
					props.display ? classes.darkHover : ''
				}`}
			>
				Active
			</span>
			<span
				className={`${classes.completed} ${
					props.display ? classes.darkHover : ''
				}`}
			>
				Completed
			</span>
		</div>
	);
}

export default Status;
