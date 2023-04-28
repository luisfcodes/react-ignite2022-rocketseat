import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import styles from './NewTask.module.css';

import { PlusCircle } from '@phosphor-icons/react'
import { List } from '../pages/Home';

interface NewTaskProps {
  list: List[];
  setTaskList: Dispatch<SetStateAction<List[]>>
}

export function NewTask({ list, setTaskList }: NewTaskProps){

  const [taskContent, setTaskContent] = useState('')

  function handleCrateTask(event: FormEvent, text: string){
    event.preventDefault()

    const id = list.length > 0 ? list[list.length - 1].id + 1 : 1

    if(text.trim()){
      setTaskList(state => {
        return [...state, {
          id: id,
          text: text,
          checked: false
        }]
      })
      setTaskContent('')
    }
  }

  return (
    <form className={styles.container} onSubmit={(event) => handleCrateTask(event, taskContent)}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        value={taskContent} 
        onChange={(event) => setTaskContent(event.target.value)}
        required
      />
      <button>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button >
    </form>
  )
}