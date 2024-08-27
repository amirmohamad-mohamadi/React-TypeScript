import { useRef, type FormEvent } from "react"
import { Form, Stack, Row, Col, Button } from "react-bootstrap"
import CreatableSelect from "react-select/creatable"
function PostForm() {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
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
                            <CreatableSelect isMulti placeholder="انتخاب" />
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