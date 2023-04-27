import styles from './Home.module.css';

import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { TaskList } from '../components/TaskList';

export function Home(){
  return (
    <>
    <Header />
    
    <main className={styles.container}>
      <NewTask />

      <TaskList />
    </main>
    </>
  )
}