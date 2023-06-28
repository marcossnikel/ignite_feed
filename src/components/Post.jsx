/* eslint-disable react/prop-types */
export function Post(props) {
  return (
    <div>
      <p>Post</p>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </div>
  );
}
