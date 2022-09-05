import axios from "axios";

const rootUrl = "http://localhost:4000/api/";
const otpReqUrl = rootUrl + "send-email-for-forgot-password";
 const updatePassUrl = rootUrl + "forgot-password";

export const reqPasswordOtpp = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqUrl, { email });

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(updatePassUrl, passObj);

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};