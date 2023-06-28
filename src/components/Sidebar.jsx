import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt="cover"
      />

      <div className={styles.profile}>
        <strong>Marcos Nikel</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">Editar your profile</a>
      </footer>
    </aside>
  );
}
