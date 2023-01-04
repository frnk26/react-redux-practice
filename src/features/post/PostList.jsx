import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from './postSlice'
// 
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'


const PostList = () => {
    const posts = useSelector(selectAllPost)

    // sorting by 
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <div>
            <h1>Posts</h1>
            {renderedPosts}
        </div>
    )

}

export default PostList