import { Dispatch, SetStateAction } from 'react';
import { List } from '../pages/Home';
import styles from './TaskList.module.css';

import { Notepad, Trash } from '@phosphor-icons/react';

interface TaskListProps {
  list: List[];
  setTaskList: Dispatch<SetStateAction<List[]>>
}

export function TaskList({ list, setTaskList }: TaskListProps) {

  function handleDeleteTask(id: number){
    const newList = list.filter(task => task.id !== id)

    setTaskList(newList)
  }

  function handleCheckedTask(id: number){
    const newList = list.map(task => {
      if(task.id === id){
        return {
          ...task,
          checked: !task.checked
        }
      } else {
        return task
      }
    })

    setTaskList(newList)
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div>
          <span>Tarefas Criadas</span>
          <span>{list.length}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </div>

      {list.length > 0 ? (
        <ul className={styles.list}>
          {list.map((item: List) => (
            <li key={item.id}>
              <button onClick={() => handleCheckedTask(item.id)}></button>
              <span>{item.text}</span>
              <button onClick={() => handleDeleteTask(item.id)}>
                <Trash size={24} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noContent}>
          <Notepad size={56} weight='light' />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h3>Crie tarefas e organize seus itens a fazer</h3>
        </div>
      )}
    </section>
  )
}