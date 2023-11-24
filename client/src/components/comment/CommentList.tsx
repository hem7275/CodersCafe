import React from "react";
import CommentItem from "./CommentItem";

interface CommentInterface {
    user: string;
    content: string;
    createdAt: string;
    votes: number;
    parent: string; // parent comment id
}

const CommentList: React.FC = () => {
    const comments: CommentInterface[] = [
        {
            user: "bcdk",
            content: "alksjd dkj dfj",
            createdAt: "20 mar 9339",
            votes: -10,
            parent: "9393822929",
        },
    ];
    return (
        <div>
            <p>Comments</p>
            {comments.map((comment, id) => (
                <CommentItem key={id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;
