import { API_BASE_URL } from '../config';

async function request(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}/api${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    })

    if (!response.ok) {
        let message = 'Something went wrong'

        try {
            const data = await response.json()
            message = data.message || message
        } catch {
            message = await response.text()
        }

        throw new Error(message)
    }

    if (response.status === 204) {
        return null
    }

    return response.json()
}

export function registerUser(userData) {
    return request('/users', {
        method: 'POST',
        body: JSON.stringify(userData),
    })
}

export function loginUser(credentials) {
    return request('/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    })
}

export function getUsers() {
    return request('/users')
}

export function getPosts() {
    return request('/posts')
}

export function createPost(postData) {
    return request('/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
    })
}

export function likePost(postId, userId) {
    return request(`/posts/${postId}/like`, {
        method: 'POST',
        body: JSON.stringify({ userId }),
    })
}

export function addComment(postId, commentData) {
    return request(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData),
    })
}

export function getFriends(userId) {
    return request(`/users/${userId}/friends`)
}

export function getMessages(friendId, currentUserId) {
    return request(`/chats/${friendId}/messages?currentUserId=${currentUserId}`)
}

export function sendMessage(friendId, messageData) {
    return request(`/chats/${friendId}/messages`, {
        method: 'POST',
        body: JSON.stringify(messageData),
    })
}