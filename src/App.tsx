import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/marcossnikel.png",
        name: "Marcos Nikel",
        role: "FrontEnd Software Developer",
      },
      publishedAt: new Date("2023-07-06 21:03:00"),
      content: [
        { type: "paragraph", content: "Título do comentario do dale" },
        {
          type: "paragraph",
          content: "Conteúdo do comentario teste nas props daledele 🚀",
        },
        {
          type: "link",
          content: "marcosnikel.com",
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "FrontEnd Dev",
      },
      publishedAt: new Date("2023-07-10 21:04:00"),
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
