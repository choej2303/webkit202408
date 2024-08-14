import React from "react";

function BlogPosts({blogPosts}) {
    return (
        <div className="w3-third">
            <h3>BLOG POSTS</h3>
            <ul className="w3-ul w3-hoverable">
                {blogPosts.map((post) => (
                    <li className="w3-padding-16">
                        <img src={post.src} className="w3-left w3-margin-right"
                             style={{width: "50px"}}/>
                        <span className="w3-large">{post.title}</span><br/>
                        <span>{post.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogPosts;