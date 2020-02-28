import React from "react";
import { Link } from "react-router-dom";

const Issue = ({ _id, title, onDelete, ...rest }) => {
	return (
		<div className="media text-muted pt-3">
			<i
				className="fa fa-commenting"
				style={{ fontSize: 20, color: "#159570" }}
			></i>
			<p
				className="media-body pb-3 mb-0 large lh-125 border-bottom border-gray"
				style={{ marginLeft: 5 }}
			>
				<Link to={`/forum/${_id}`}>{title}</Link>
			</p>
			<button className="btn btn-danger" onClick={() => onDelete(_id)}>
				Delete
			</button>
		</div>
	);
};

export default Issue;
