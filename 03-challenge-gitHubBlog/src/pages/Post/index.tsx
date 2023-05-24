import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <a href="#">Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <code>
          let foo = 42 // foo is now a number <br />
          foo = &apos;bar&apos; // foo is now a string <br />
          foo = true // foo is now a boolean <br />
        </code>
      </PostContent>
    </PostContainer>
  )
}
