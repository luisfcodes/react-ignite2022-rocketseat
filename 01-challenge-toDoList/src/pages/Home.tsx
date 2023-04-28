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

  // const [countCheckedTask, setCountCheckedTask] = useState(0)
  const [taskList, setTaskList] = useState<List[]>([
    {
      id: 1,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false
    },
    {
      id: 2,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false
    }
  ])

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