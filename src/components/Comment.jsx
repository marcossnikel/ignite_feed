// 8168
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/marcossnikel.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Nikel</strong>
              <time title="02 de Julho as 16:24" dateTime="2023-07-02 16:24:00">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabens</p>
        </div>
        <footer className={styles.footer}>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
