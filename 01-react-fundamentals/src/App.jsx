import { Header } from "./components/Header";

import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, praesentium debitis tempora quos omnis dolor assumenda, illo nisi, vitae quidem quaerat corporis ea. Necessitatibus totam eius quod delectus, modi laudantium?</h1>
        </main>
      
      </div>
    </div>
  )
}