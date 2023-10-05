import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDelete }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDelete(content)
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luisfcodes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luis Fernando</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}