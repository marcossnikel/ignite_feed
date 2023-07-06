import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="marcos nikel" content="hahahaha" />
          <Post />
        </main>
      </div>
    </div>
  );
}
