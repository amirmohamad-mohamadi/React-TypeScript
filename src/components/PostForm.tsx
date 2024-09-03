import { useRef, useState, type FormEvent } from "react"
import { Form, Stack, Row, Col, Button } from "react-bootstrap"
import CreatableSelect from "react-select/creatable"
import { v4 as uuidV4 } from "uuid"

import { Tag, type PostData } from "../App"

type PostFromProps = {
    onSubmit: (data: PostData) => void
    addTags: (tag: Tag) => void
    availableTags: Tag[]
}

function PostForm({ onSubmit, addTags, availableTags }: PostFromProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        })
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>عنوان</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tag">
                            <Form.Label>تگ</Form.Label>
                            <CreatableSelect options={availableTags.map(item => { return { label: item.label, value: item.id } })} onCreateOption={(label) => {
                                const newTag = { label, id: uuidV4() }
                                addTags(newTag)
                                setSelectedTags((prevState) => [...prevState, newTag])
                            }} isMulti placeholder="انتخاب" value={selectedTags.map(item => {
                                return { label: item.label, value: item.id }
                            })}
                                onChange={(tags) => {
                                    setSelectedTags(tags.map(item => {
                                        return { label: item.label, id: item.value }
                                    }))
                                }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group controlId="markdown">
                        <Form.Label>پست</Form.Label>
                        <Form.Control ref={markdownRef} required as="textarea" rows={15} />
                    </Form.Group>
                    <Stack direction="horizontal" gap={2} className="justify-content-start">
                        <Button type="submit" variant="light">انتشار پست</Button>
                        <Button type="button" variant="outline-light">لغو</Button>
                    </Stack>
                </Row>
            </Stack>
        </Form >
    )
}

export default PostForm