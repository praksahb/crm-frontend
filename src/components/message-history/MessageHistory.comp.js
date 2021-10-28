import React from "react";
import PropTypes from "prop-types";
import "./message-history.style.css";

export const MessageHistory = ({ msg }) => {
	if (!msg) return null;

	return msg.map((row, index) => (
		<div key={index} className="message-history mt-3">
			<div className="send font-weight-bold text-secondary">
				<div className="sender m-2">{row.sender}</div>
				<div className="date m-2">
					{row.msgAt && new Date(row.msgAt).toLocaleString()}
				</div>
			</div>
			<div className="message">{row.message}</div>
		</div>
	));
};

MessageHistory.propTypes = {
	msg: PropTypes.array.isRequired,
};
