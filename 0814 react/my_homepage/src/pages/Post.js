import './Post.css'

const Post = () => {
    const posts = [
        {
            date: new Date().toISOString(),
            title: "새 게시물",
            content: "새 게시물 내용"
        }
    ]
    return (
        <div className='post-container'>
            {/*글쓰기 버튼*/}
            <div className="postBtn">
                <button>글쓰기</button>
            </div>
            {posts.map(post => (
                <div className='post'>
                    <div>{post.date}</div>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}
        </div>

    )
}

export default Post