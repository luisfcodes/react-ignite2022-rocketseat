import styles from './Home.module.css';

import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { TaskList } from '../components/TaskList';
import { useState } from 'react';

export interface List {
  id: number;
  text: string;
  checked: boolean
}

export function Home(){
  const [taskList, setTaskList] = useState<List[]>([])

  return (
    <>
    <Header />
    
    <main className={styles.container}>
      <NewTask list={taskList} setTaskList={setTaskList}/>

      <TaskList list={taskList} setTaskList={setTaskList}/>
    </main>
    </>
  )
}