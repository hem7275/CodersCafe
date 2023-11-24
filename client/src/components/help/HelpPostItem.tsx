import React from "react";

interface PostInterface {
    title: string;
    content: string;
    user: string;
    createdAt: string;
    votes: number;
    solved: boolean;
}

interface PropeType {
    post: PostInterface
}

const HelpPostItem: React.FC<PropeType> = ({ post }) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.user}</p>
        </div>
    );
};

export default HelpPostItem;
