export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "hyoil",
      },
      content: "first blog",
      Images: [
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
        },
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
        },
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "hello",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "world",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "yuki",
  },
  content: "first blog",
  Images: [
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
    },
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
    },
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3B5j0rXQiGJTNm5oR57YCI&ust=1683456615269000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjonOHC4P4CFQAAAAAdAAAAABAE",
    },
  ],
  Comments: [
    {
      User: {
        nickname: "nero",
      },
      content: "hello",
    },
    {
      User: {
        nickname: "hero",
      },
      content: "world",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
