// HelpPostItem.tsx
import React from "react";
import CommentList from "../comment/CommentList";

interface PropeType {
    post: {
        _id: string;
        title: string;
        description: string;
        images: [];
        author: string;
        votes: number;
        solved: boolean;
        createdAt: String;
        updatedAt: String;
}
}

const HelpPostItem: React.FC<PropeType> = ({ post }) => {
    return (
        <div className="bg-white p-6 my-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">Posted by {post.author} on {post.createdAt}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Upvote ({post.votes})
                </button>
                <button className={`text-sm font-semibold ${post.solved ? 'text-green-500' : 'text-gray-500'}`}>
                    {post.solved ? "Marked as Solved" : "Mark as Solved"}
                </button>
            </div>
            {/* Comments Section */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Comments</h3>
                {/* You can map through the comments array here and render each comment */}
                {/* Example comment */}
                <div className="bg-gray-100 p-3 rounded-md mb-2">
                    {/* <p className="text-gray-700">User123: This is a great solution!</p> */}
                    <CommentList />
                </div>
                {/* Add your comment input field and submit button here */}
            </div>
        </div>
    );
};

export default HelpPostItem;
