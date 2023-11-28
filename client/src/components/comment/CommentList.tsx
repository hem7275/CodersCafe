// CommentList.tsx
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
            createdAt: "20 Mar 2023",
            votes: -10,
            parent: "9393822929",
        },
        // Add more comments as needed
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Comments</h2>
            {comments.map((comment, id) => (
                <CommentItem key={id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;
