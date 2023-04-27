import styles from './NewTask.module.css';

import { PlusCircle } from '@phosphor-icons/react'

export function NewTask(){
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  )
}