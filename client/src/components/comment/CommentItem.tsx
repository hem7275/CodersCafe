import React from "react";

interface CommentInterface {
    user: string;
    content: string;
    createdAt: string;
    votes: number;
    parent: string; // parent comment id
}

interface PropType {
    comment: CommentInterface;
}

const CommentItem: React.FC<PropType> = ({ comment }) => {
    return (
        <div>
            <p>CommentItem</p>
            <p>{comment.user}</p>
            <p>{comment.content}</p>
        </div>
    );
};

export default CommentItem;
