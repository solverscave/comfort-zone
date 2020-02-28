import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FundCard = ({ _id, title, description, imgUrl }) => {
	return (
		<Card style={{ width: "17rem" }}>
			<Link to={`/fundraising/${_id}`}>
				<Card.Img variant="top" src={imgUrl} />
			</Link>

			<Card.Body>
				<Card.Title>
					<Link to={`/fundraising/${_id}`} style={{ color: "black" }}>
						{title}
					</Link>
				</Card.Title>
				<Card.Text
					style={{
						width: "150px",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis"
					}}
				>
					{description}
				</Card.Text>
				<Link className="btn btn-cz" to="/funding" variant="primary">
					Donate
				</Link>
				<Link
					style={{ float: "right" }}
					className="btn btn-czo"
					to={`/fundraising/${_id}`}
					variant="primary"
				>
					Read Details
				</Link>
			</Card.Body>
		</Card>
	);
};

export default FundCard;
