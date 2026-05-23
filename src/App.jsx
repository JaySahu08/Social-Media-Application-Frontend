import { useEffect, useState } from 'react'
import {
  addComment,
  createPost,
  getMessages,
  getPosts,
  getUsers,
  likePost,
  loginUser,
  registerUser,
  sendMessage,
} from './api/api'
import AuthForm from './components/AuthForm'
import ChatWindow from './components/ChatWindow'
import Feed from './components/Feed'
import FriendList from './components/FriendList'
import Navbar from './components/Navbar'
import PostComposer from './components/PostComposer'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [messages, setMessages] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleLogout() {
    setCurrentUser(null)
    setSelectedFriend(null)
    setMessages([])
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend)
    setMessages([])
  }

  function handleCloseChat() {
    setSelectedFriend(null)
    setMessages([])
  }

  async function refreshUsers() {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    let ignore = false

    getUsers()
        .then((data) => {
          if (!ignore) {
            setUsers(data)
          }
        })
        .catch((err) => {
          if (!ignore) {
            setError(err.message)
          }
        })

    getPosts()
        .then((data) => {
          if (!ignore) {
            setPosts(data)
          }
        })
        .catch(() => {
          if (!ignore) {
            setPosts([])
          }
        })

    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    if (!currentUser || !selectedFriend) {
      return
    }

    let ignore = false

    getMessages(selectedFriend.id, currentUser.id)
        .then((data) => {
          if (!ignore) {
            setMessages(data)
          }
        })
        .catch((err) => {
          if (!ignore) {
            setError(err.message)
            setMessages([])
          }
        })

    return () => {
      ignore = true
    }
  }, [currentUser, selectedFriend])

  async function handleRegister(formData) {
    try {
      setError('')
      setSuccess('')

      const user = await registerUser(formData)
      setCurrentUser(user)
      setSuccess('Account created successfully')
      await refreshUsers()
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleLogin(formData) {
    try {
      setError('')
      setSuccess('')

      const user = await loginUser(formData)
      setCurrentUser(user)
      setSuccess(`Welcome back, ${user.name}`)
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleCreatePost(postData) {
    if (!currentUser) {
      setError('Please login before creating a post')
      return
    }

    try {
      setError('')
      setSuccess('')

      const newPost = await createPost({
        ...postData,
        userId: currentUser.id,
      })

      setPosts((previousPosts) => [newPost, ...previousPosts])
      setSuccess('Post shared successfully')
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleLikePost(postId) {
    if (!currentUser) {
      setError('Please login before liking a post')
      return
    }

    try {
      const updatedPost = await likePost(postId, currentUser.id)

      setPosts((previousPosts) =>
        previousPosts.map((post) => (post.id === postId ? updatedPost : post)),
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleAddComment(postId, comment) {
    if (!currentUser) {
      setError('Please login before commenting')
      return
    }

    try {
      const updatedPost = await addComment(postId, {
        text: comment,
        userId: currentUser.id,
      })

      setPosts((previousPosts) =>
        previousPosts.map((post) => (post.id === postId ? updatedPost : post)),
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleSendMessage(messageText) {
    if (!currentUser || !selectedFriend) {
      return
    }

    const temporaryMessage = {
      id: Date.now(),
      text: messageText,
      senderId: currentUser.id,
      receiverId: selectedFriend.id,
      senderName: currentUser.name,
    }

    setMessages((previousMessages) => [...previousMessages, temporaryMessage])

    try {
      const savedMessage = await sendMessage(selectedFriend.id, {
        text: messageText,
        senderId: currentUser.id,
      })

      setMessages((previousMessages) =>
        previousMessages.map((message) =>
          message.id === temporaryMessage.id ? savedMessage : message,
        ),
      )
    } catch (err) {
      setError(err.message)
    }
  }

  const friends = users.filter((user) => user.id !== currentUser?.id)

  return (
      <div className="app-shell">
        <Navbar currentUser={currentUser} onLogout={handleLogout} />

        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}

        {!currentUser ? (
            <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
        ) : (
            <main className={selectedFriend ? 'layout chat-open' : 'layout'}>
              <aside className="sidebar">
                <FriendList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelectFriend={handleSelectFriend}
                />
              </aside>

              <section className="feed-column">
                <PostComposer onCreatePost={handleCreatePost} />
                <Feed
                    posts={posts}
                    onLikePost={handleLikePost}
                    onAddComment={handleAddComment}
                />
              </section>

              {selectedFriend && (
              <aside className="chat-column">
                <ChatWindow
                    currentUser={currentUser}
                    selectedFriend={selectedFriend}
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    onClose={handleCloseChat}
                />
              </aside>
              )}
            </main>
        )}
      </div>
  )
}

export default App
