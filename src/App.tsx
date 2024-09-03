// import { useMemo } from "react"
import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { v4 as uuidV4 } from "uuid"

import AddPost from "./components/AddPost"
import { useLocaStorage } from "./hooks/useLocalStorage"

export type RawPost = {
  id: string
} & RawPostData

export type RawPostData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type PostData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string,
  label: string
}


function App() {
  const [posts, setPosts] = useLocaStorage<RawPost[]>({ key: "POSTS", initialValue: [] })
  const [tags, setTags] = useLocaStorage<Tag[]>({ key: "TAGS", initialValue: [] })

  // const postsWithTags = useMemo(() => posts.map((item) => {
  //   return {
  //     ...item,
  //     tags: tags.filter(tag => item.tagIds.includes(tag.id))
  //   }
  // }), [posts, tags])

  function addTags(tag: Tag) {
    console.log('tag', tag)
    setTags((prevState) => [...prevState, tag])
  }


  function onCreatePost({ tags, ...data }: PostData) {
    setPosts((prevPosts) => {
      return [...prevPosts, { ...data, id: uuidV4(), tagIds: tags.map(item => item.id) }]
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/add" element={<AddPost onSubmit={onCreatePost} addTags={addTags} availableTags={tags} />} />
        <Route path="/:id" >
          <Route index element={<h2>View Post</h2>} />
          <Route path="edit" element={<h2>Edit Post</h2>} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
