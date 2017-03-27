let posts = [
  {title: 'title0', body: 'body0'},
  {title: 'title1', body: 'body1'},
  {title: 'title2', body: 'body2'},
];

exports.index = (request, response) => {
  response.render('posts/index', {posts: posts});
};
exports.show = (request, response) => {
  response.render('posts/show', {post: posts[request.params.id]});
};
exports.new = (request, response) => {
  response.render('posts/new');
};
exports.edit = (request, response) => {
  response.render('posts/edit', {
    post: posts[request.params.id],
    id: request.params.id,
  });
};
exports.update = (request, response) => {
  posts[request.body.id] = {
    title: request.body.title,
    body: request.body.body,
  };
  response.redirect('/');
};
exports.destroy = (request, response) => {
  posts.splice(request.body.id, 1);
  response.redirect('/');
};
exports.create = (request, response) => {
  let post = {
    title: request.body.title,
    body: request.body.body,
  };
  posts.push(post);
  response.redirect('/');
};

exports.method = (request, response) => {
  if (request.body && typeof request.body
      === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    const method = request.body._method;
    delete request.body._method;
    return method;
  }
};
