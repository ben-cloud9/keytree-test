import axios from 'axios'

// Documentation is at https://developer.github.com/v3

// https://api.github.com/users/ben-cloud9/repos?per_page=250

const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

const getRepos = (username) => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
    return axios.get(url).then(response => response.data);
};

const getUserData = (username) => {
    return axios
        .all([
            axios.get(`${BASE_URL}/users/${username}`),
            axios.get(`${BASE_URL}/users/${username}/orgs`)
        ])
        .then(([user, orgs]) => ({
            user: user.data,
            orgs: orgs.data
        }));
};

export default {
    getUserData,
    getRepos
};