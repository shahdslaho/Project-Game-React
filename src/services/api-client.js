import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d87696a5531c49a5a229175e7550659b",
    },
});
