import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({
	_id,
	currentUserId,
	title,
	description,
	userId,
	userName,
	userImage,
	onDelete,
	...rest
}) => {
	// return (
	// 	<div className="media text-muted pt-3">
	// 		<i
	// 			className="fa fa-commenting"
	// 			style={{ fontSize: 20, color: "#159570" }}
	// 		></i>
	// 		<p
	// 			className="media-body pb-3 mb-0 large lh-125 border-bottom border-gray"
	// 			style={{ marginLeft: 5 }}
	// 		>
	// 			<Link to={`/forum/${_id}`}>{title}</Link>
	// 		</p>
	// 		<button className="btn btn-danger" onClick={() => onDelete(_id)}>
	// 			Delete
	// 		</button>
	// 	</div>
	// );
	function getDeleteButton() {
		if (userId === currentUserId)
			return (
				<button className='btn btn-danger' onClick={() => onDelete(_id)}>
					Delete
				</button>
			);
		else {
			return null;
		}
	}
	return (
		<div className='container mt-2'>
			<div className='media border p-3'>
				<img
					src={userImage}
					alt='John Doe'
					className='mr-3 mt rounded-circle'
					style={{ width: '60px' }}
				/>
				<div className='media-body'>
					<h4>
						{userName}{' '}
						<small>
							<i>Posted on February 19, 2016</i>
						</small>
					</h4>
					<Link to={`/forum/${_id}`} style={{ color: '#159570' }}>
						{title}
					</Link>
				</div>
				{getDeleteButton()}
			</div>
		</div>
	);
};

export default Issue;
