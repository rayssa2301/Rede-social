import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rayssa2301.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rayssa Carvalho</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 dde março às 09:42h" dateTime="2023-03-01 09:42:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          {" "}
          <a href=""> jane.design/doctorcare </a>
        </p>

        <p>
          {" "}
          <a href="">#novoprojeto</a> <a href=""> #nlw </a>{" "}
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
