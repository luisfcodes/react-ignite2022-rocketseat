import styles from './TaskList.module.css';

import { Notepad } from '@phosphor-icons/react';

export function TaskList(){
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div>
          <span>Tarefas Criadas</span>
          <span>0</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </div>

      <div className={styles.noContent}>
        <Notepad size={56} weight='light' />
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h3>Crie tarefas e organize seus itens a fazer</h3>
      </div>
    </section>
  )
}