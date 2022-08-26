import axios from 'axios';
const serverUrl = 'http://localhost:2321/api/';

export async function login(username, password) {
    let response = await axios.post(serverUrl + "signin", { username, password });
    return response.data;
}

export async function signup(username, password) {
    let response = await axios.post(serverUrl + "signup", { username, password });
    return response.data;
}

export async function getTweets() {
    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    let response = await axios.get(serverUrl + 'tweets');
    let { tweets } = response.data;
    return tweets;
}

export async function postTweet(tweet) {
    // here we put the token in the header of the request
    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    let response = await axios.post(serverUrl + 'tweets', { text: tweet });
    return response.data;
}