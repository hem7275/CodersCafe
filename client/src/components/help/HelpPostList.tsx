

// HelpPostList.tsx
import React from "react";
import HelpPostItem from "./HelpPostItem";

const HelpPostList: React.FC = () => {
    const posts = [
        // ... (your existing data)
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
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Help Post List</h1>
            {posts.map((post, id) => (
                <HelpPostItem key={id} post={post} />
            ))}
        </div>
    );
};

export default HelpPostList;


