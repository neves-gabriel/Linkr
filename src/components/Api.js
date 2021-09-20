import axios from "axios";

function LoginReq(body) {
return axios.post(
"https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-in",
body
);
}

function SignupReq(body) {
return axios.post(
"https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-up",
body
);
}

function getTrendingHashtags() {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}
return axios.get(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/trending`, config
);
}

function getHashtagPosts(hashtagName) {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}
return axios.get(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/${hashtagName}/posts`, config
);
}

function getPosts() {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}
return axios.get(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts`, config
);
}

function LikePost(body) {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}

return axios.post(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${body}/like`, [], config
);
}

function DislikePost(body) {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}
return axios.post(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${body}/dislike`,[], config
);
}

function sendCreatePost(body) {
const config = {headers: {
"Authorization" : `Bearer ${localStorage.getItem("auth")}`
}
}

return axios.post(
`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts`, body, config
);
}

export { LoginReq, SignupReq, getTrendingHashtags, getHashtagPosts, getPosts, LikePost, DislikePost, sendCreatePost };
