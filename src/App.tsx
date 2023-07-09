import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";
import { IPost } from "./components/Post";
export function App() {
  const posts: IPost[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/marcossnikel.png",
        name: "Marcos Nikel",
        role: "Frontend Engineer",
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
        <Sidebar
          name="Marcos Nike"
          role="Frontend Engineer"
          avatarUrl="https://github.com/marcossnikel.png"
        />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
