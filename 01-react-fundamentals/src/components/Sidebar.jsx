import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"/>
    
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/12867589?v=4" />

        <strong>Luis Fernando</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}