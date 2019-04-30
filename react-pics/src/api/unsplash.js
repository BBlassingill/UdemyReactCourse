import Axios from "axios";

export default Axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID a1eb7f235b22b34b9c13c77ae704d231508e6e8b0606e6b2146511a11c285764"
	}
});


