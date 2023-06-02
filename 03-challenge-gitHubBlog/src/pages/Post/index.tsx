import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface PostType {
  title: string
  body: string
  comments: number
  html_url: string
  created_at: string
  user: {
    login: string
  }
}

export function Post() {
  const { postId } = useParams()
  const [post, setPost] = useState<PostType>()

  useEffect(() => {
    api
      .get(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postId}`,
      )
      .then((response) => setPost(response.data))
  }, [postId])

  return (
    <PostContainer>
      {post && (
        <>
          <PostInfo
            title={post.title}
            user={post.user.login}
            comments={post.comments}
            html_url={post.html_url}
            created_at={post.created_at}
          />

          <PostContent>
            <ReactMarkdown
              /* eslint-disable-next-line react/no-children-prop */
              children={post.body}
              rehypePlugins={[rehypeRaw]}
              linkTarget={'_blank'}
            />
          </PostContent>
        </>
      )}
    </PostContainer>
  )
}
