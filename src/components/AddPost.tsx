import { PostData, Tag } from "../App"
import PostForm from "./PostForm"

type AddPost = {
    onSubmit: (data: PostData) => void
    addTags: (tag: Tag) => void
    availableTags: Tag[]
}

function AddPost({ onSubmit, addTags, availableTags }: AddPost) {
    return (
        <>
            <h2>افزودن پست</h2>
            <PostForm onSubmit={onSubmit} addTags={addTags} availableTags={availableTags} />
        </>
    )
}

export default AddPost