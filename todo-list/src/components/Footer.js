import React from 'react';
import classes from './Footer.module.css';

const Footer = props => {
  return (
		<div className={classes.footerContainer}>
			<div className={classes.items}>{props.todos.length} items left</div>
			<div className={classes.status}>
				<span className={classes.all}>All</span>
				<span
					className={`${classes.active} ${
						props.toggleDisplay ? classes.darkHover : ''
					}`}
				>
					Active
				</span>
				<span
					className={`${classes.completed} ${
						props.toggleDisplay ? classes.darkHover : ''
					}`}
				>
					Completed
				</span>
			</div>
			<div
				className={`${classes.clear} ${
					props.toggleDisplay ? classes.darkHover : ''
				}`}
			>
				Clear Completed
			</div>
		</div>
	);
}

export default Footer;
