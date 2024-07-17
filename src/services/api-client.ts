import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "333e75d02dac4346bf283236169a9a09",
  },
});
