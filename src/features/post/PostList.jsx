import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPost } from './postSlice'

// 
import PostsExcerpt from './PostsExcerpt'


const PostList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPost)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    // trigger the fetching of posts because the status is idle
    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])


    let content;
    if (postsStatus === 'loading') {
        content = <p>"LOADING"</p>
    } else if (postsStatus === "succeeded") {
        // sorting
        // map over posts that are sorted by date and store it in content 
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postsStatus === "failed") {
        content = <p>"FAILED"</p>
    }



    return (
        <div>
            <h1>Posts</h1>
            {/* render the content variable */}
            {content}
        </div>
    )

}

export default PostList