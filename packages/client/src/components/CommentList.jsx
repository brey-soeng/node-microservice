const CommentList = ({ comments }) => {
  const renderCommentList = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderCommentList}</ul>;
};

export default CommentList;
