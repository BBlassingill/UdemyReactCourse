import Axios from "axios";

const KEY = "AIzaSyC8IWn57x0yHpECynKhtJpRqYc6pLIxDS0";

export default Axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
