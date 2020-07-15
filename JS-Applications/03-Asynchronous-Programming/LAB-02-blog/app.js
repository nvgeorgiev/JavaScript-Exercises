const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com';

const loadPostsBtn = document.getElementById('btnLoadPosts');
const postsSelectEl = document.getElementById('posts');
const viewPostsBtnEl = document.getElementById('btnViewPost');
const postTitleEl = document.getElementById('post-title');
const postBodyEl = document.getElementById('post-body');
const postCommentsUlEl = document.getElementById('post-comments');

function ffetch(url, options) {
  options = options || {};
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve({
            json: () => Promise.resolve(JSON.parse(request.responseText)),
          });
          return;
        }
        reject(new Error(request.status));
      }
    };
    request.open(options.method || 'GET', url);
    request.send(options.body);
  });
}

function loadPosts() {
  postsSelectEl.innerHTML =
    '<option value = "" disabled>Select post...</option>';

  ffetch(`${BASE_URL}/posts.json`)
    .then((res) => res.json())
    .then((posts) => {
      Object.entries(posts).forEach(([key, value]) => {
        const o = document.createElement('option');
        o.value = key;
        o.textContent = value.title;
        postsSelectEl.appendChild(o);
      });
    });
}

function loadPostComments() {
  const postId = postsSelectEl.value;
  const commentsReq = ffetch(`${BASE_URL}/comments.json`).then((res) =>
    res.json()
  );
  const postReq = ffetch(`${BASE_URL}/posts/${postId}.json`).then((res) =>
    res.json()
  );

  Promise.all([commentsReq, postReq]).then(([comments, currentPost]) => {
    postTitleEl.textContent = currentPost.title;
    postBodyEl.textContent = currentPost.body;

    Object.entries(currentPost.comments || {}).forEach(([key, value]) => {
      const li = document.createElement('li');
      li.textContent = value;
      postCommentsUlEl.appendChild(li);
    });
  });
}

function attachEvents() {
  loadPostsBtn.addEventListener('click', loadPosts);
  viewPostsBtnEl.addEventListener('click', loadPostComments);
}

attachEvents();
