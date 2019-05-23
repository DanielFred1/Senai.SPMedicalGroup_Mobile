import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://192.168.3.70:5000/api"
});

export default Api;