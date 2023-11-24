import React from "react";
import HelpPostItem from "./HelpPostItem";

interface PostInterface {
    title: string;
    content: string;
    user: string;
    createdAt: string;
    votes: number;
    solved: boolean;
}

const HelpPostList: React.FC = () => {
    const posts: PostInterface[] = [
        {
            title: "abcd",
            content: "kj dkfj df dkfj dfkj ",
            user: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
        {
            title: "abcd",
            content: "kj dkfj df dkfj dfkj ",
            user: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
        {
            title: "abcd",
            content: "kj dkfj df dkfj dfkj ",
            user: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
    ];
    return (
        <div>
            <h1>Help Post List</h1>
            {posts.map((post, id) => (
                <HelpPostItem key={id} post={post} />
            ))}
        </div>
    );
};

export default HelpPostList;
