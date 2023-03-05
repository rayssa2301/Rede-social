import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post
            author="Rayssa Carvalho"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Post
            author="Rayssa Carvalho"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </main>
      </div>
    </div>
  );
}
