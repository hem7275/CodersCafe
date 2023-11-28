// CommentItem.tsx
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
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <p className="text-sm font-semibold">{comment.user}</p>
            </div>
            <p className="text-gray-700 mb-2">{comment.content}</p>
            <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs">{comment.createdAt}</p>
                <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                            ></path>
                        </svg>
                        <span className="ml-1">{comment.votes}</span>
                    </button>
                    {/* Add more action buttons/icons as needed */}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
