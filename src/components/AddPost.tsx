import { PostData } from "../App"
import PostForm from "./PostForm"

type AddPost = {
    onSubmit: (data: PostData) => void
}

function AddPost({ onSubmit }: AddPost) {
    return (
        <>
            <h2>افزودن پست</h2>
            <PostForm onSubmit={onSubmit} />
        </>
    )
}

export default AddPost