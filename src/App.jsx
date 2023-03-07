import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rayssa2301.png",
      name: "Rayssa Carvalho",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. 
          É um projeto que fiz no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: "paragraph",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2021-03-01 09:42:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/5ucr4m.png",
      name: "Marcus Vinicius",
      role: "Back-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. 
          É um projeto que fiz no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: "paragraph",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2021-03-05 09:42:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
