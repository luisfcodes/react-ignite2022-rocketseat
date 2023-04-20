import { ThumbsUp, Trash } from '@phosphor-icons/react'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/12867589?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luis Fernando</strong>
              <time title='20 de abril às 14:40' dateTime='2023-04-20 14:40:23'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!👌👌</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}