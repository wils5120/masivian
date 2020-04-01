import axios from 'axios';
import { BASE_URL } from '../config/variable';

class APIService {
    static GetAPI(url) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                url: BASE_URL + url,
                headers: { 'Access-Control-Allow-Origin': '*', }
            };
            axios(options).then((response) => {
                resolve(response.data);
            }).catch(error => {
                console.log(error);
            });
        });
    }
}

export default APIService;