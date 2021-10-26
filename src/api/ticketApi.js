import axios from "axios";

export const getAllTickets = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get("http://localhost:3001/v1/ticket", {
				headers: {
					Authorization:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5cmFAZ21haWwuY29tIiwiaWF0IjoxNjM1Mjg4ODM2LCJleHAiOjE2MzUyODk3MzZ9.m0fTRgX2cL4DRxkG_J-hddUE2gbIjrmTK28xGKSSgNA",
				},
			});

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
