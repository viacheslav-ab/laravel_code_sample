
import axios from 'axios'

export const Get_Request = async(url, params) => {
    const result = await axios.get(url, {params: params});
    if (result.status === 200) {
        return result.data;
    }
    else {
        // throw new Error(result)
        throw result
    }
}

const headers = [
    {"Content-Type": "application/json"},
    {'X-CSRF-TOKEN': csrf_token}
]

export const Post_Request = async(url, params) => {
    const result = await axios.post(url, params, {headers: headers});
    if (result.status === 200) {
        return result.data;
    }
    else {
        // throw new Error(result)
        throw result
    }
}

export default Request = {
    Get_Request: Get_Request,
    Post_Request: Post_Request
}

export const api_notification = 
axios.create({
    baseURL: 'https://reactify.theironnetwork.org/data/',
    timeout: 2000
 });

// axios({
//     method: 'post',
//     url: 'https://stageapi.myapi.com/v3_2/user/splash',
//     data: JSON.stringify(payload),
//     headers: {
//         secret-key': 'mysecretkey',
//         'Content-Type': 'application/json'
//     },
// })