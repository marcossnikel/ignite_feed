import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface IPost {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: IPost;
}
export function Post({ post }: PostProps) {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([
    "Post sensacional, parabens my friend !!",
  ]);
  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event.target.setCustomValidity("This field is required !!"));
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment != commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={(e) => handleCreateNewComment(e)}
        className={styles.commentForm}
      >
        <strong>Deixe seu comentario</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="deixe um comentario"
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            onDeleteComment={deleteComment}
            content={comment}
          />
        ))}
      </div>
    </article>
  );
}
