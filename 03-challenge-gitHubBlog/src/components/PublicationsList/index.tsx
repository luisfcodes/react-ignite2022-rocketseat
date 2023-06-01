import { useEffect, useState } from 'react'
import { PublicationCard } from '../PublicationCard'
import { PublicationsListContainer } from './styles'
import { api } from '../../lib/axios'

interface Post {
  title: string
  body: string
  number: number
}

export function PublicationsList() {
  const [post, setPost] = useState<Post[]>()

  useEffect(() => {
    api
      .get(
        '/search/issues?q=vite%20repo:rocketseat-education/reactjs-github-blog-challenge',
      )
      .then((response) => setPost(response.data.items))
  }, [])

  return (
    <PublicationsListContainer>
      <header>
        <span>Publicações</span>
        <span>
          {post && post.length === 1
            ? '1 publicação'
            : `${post?.length} publicações`}
        </span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />

      <section>
        {post?.map((post) => (
          <PublicationCard
            key={post.number}
            title={post.title}
            body={post.body}
            id={post.number}
          />
        ))}
      </section>
    </PublicationsListContainer>
  )
}
