import { ChangeEvent, useEffect, useState } from 'react'
import { PublicationCard } from '../PublicationCard'
import { PublicationsListContainer } from './styles'
import { api } from '../../lib/axios'

interface Post {
  title: string
  body: string
  number: number
  created_at: string
}

export function PublicationsList() {
  const [postsList, setPostsList] = useState<Post[]>()
  const [filteredPosts, setFilteredPosts] = useState<Post[]>()

  async function getPosts() {
    const { data } = await api.get(
      '/search/issues?q=vite%20repo:rocketseat-education/reactjs-github-blog-challenge',
    )

    setPostsList(data.items)
    setFilteredPosts(data.items)
  }

  useEffect(() => {
    getPosts()
  }, [])

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setFilteredPosts(postsList)
    } else {
      const filteredPosts = postsList?.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      })

      setFilteredPosts(filteredPosts)
    }
  }

  return (
    <PublicationsListContainer>
      <header>
        <span>Publicações</span>
        <span>
          {postsList && postsList.length === 1
            ? '1 publicação'
            : `${
                postsList?.length === undefined ? 0 : postsList.length
              } publicações`}
        </span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearch}
      />

      <section>
        {filteredPosts?.map((post) => (
          <PublicationCard
            key={post.number}
            title={post.title}
            body={post.body}
            id={post.number}
            created_at={post.created_at}
          />
        ))}
      </section>
    </PublicationsListContainer>
  )
}
