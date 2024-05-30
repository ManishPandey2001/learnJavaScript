// Simulate asynchronous operations with setTimeout
function fetchUser(userId, callback) {
    setTimeout(() => {
      console.log('Fetched user data');
      callback(null, { userId: userId, name: 'John Doe' });
    }, 1000);
  }
  
  function fetchPosts(userId, callback) {
    setTimeout(() => {
      console.log('Fetched posts for user');
      callback(null, [
        { postId: 1, content: 'Post 1' },
        { postId: 2, content: 'Post 2' }
      ]);
    }, 1000);
  }
  
  function fetchComments(postId, callback) {
    setTimeout(() => {
      console.log('Fetched comments for post');
      callback(null, [
        { commentId: 1, content: 'Comment 1' },
        { commentId: 2, content: 'Comment 2' }
      ]);
    }, 1000);
  }
  
  // Nested callbacks (Callback Hell)
  fetchUser(1, (userError, user) => {
    if (userError) {
      console.error('Error fetching user:', userError);
      return;
    }
  
    fetchPosts(user.userId, (postsError, posts) => {
      if (postsError) {
        console.error('Error fetching posts:', postsError);
        return;
      }
  
      posts.forEach((post) => {
        fetchComments(post.postId, (commentsError, comments) => {
          if (commentsError) {
            console.error('Error fetching comments:', commentsError);
            return;
          }
  
          console.log(`User: ${user.name}`);
          console.log(`Post: ${post.content}`);
          console.log('Comments:', comments);
        });
      });
    });
  });
  