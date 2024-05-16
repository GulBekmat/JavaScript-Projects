let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message:
          "Faizan can you call me back after 2pm? I need to talk with you.",
        likesCount: 45,
      },
      {
        id: 2,
        message: "I just bought a new laptop, it's amazing!",
        likesCount: 30,
      },
      { id: 3, message: "In 5min I will be at home.", likesCount: 18 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Faizan" },
      { id: 2, name: "Muhammad" },
      { id: 3, name: "Jakob" },
      { id: 4, name: "Coconut" },
      { id: 5, name: "Aida" },
    ],
    messages: [
      { id: 1, message: "Hello! How are you?" },
      { id: 2, message: "I'm doing great, thanks for asking!" },
    ]
  },
  sidebar: {}
}

let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  }
state.profilePage.posts.push(newPost)
}

export default state;