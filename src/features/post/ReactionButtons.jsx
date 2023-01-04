import { useDispatch } from "react-redux";
import { reactionAdd } from "./postSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: ' 🚀',
    coffee: '☕'
}

import React from 'react';

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                className="reactionButton"
                type="button"
                onClick={() => {
                    dispatch(reactionAdd({ postId: post.id, reaction: name }));
                }}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButtons