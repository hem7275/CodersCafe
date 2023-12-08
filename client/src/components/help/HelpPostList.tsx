// HelpPostList.tsx
import React, { useEffect, useState } from "react";
import HelpPostItem from "./HelpPostItem";
import axios from "axios";
import { useAppSelector } from "../../store";

interface Post {
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

interface Posts {
    posts: Post;
}

const P = {
    _id: "6572ff73db0bbe86af311922",
    title: 'first post',
    description: 'this is first post',
    images: [],
    author:  "655f7bc4b2ae1c1989e29b95",
    votes: 0,
    solved: false,
    createdAt: '2023-12-08T11:35:15.313Z',
    updatedAt: '2023-12-08T11:35:15.313Z',
  }

const HelpPostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]| []>([]);

    const {
        auth: { userDetails },
    } = useAppSelector((state) => state);

    const getAllPosts = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/help/all`, {
                headers: {
                    authorization: `Basic ${userDetails?.token}`,
                    "Content-Type": "application/json",
                },
            });

            setPosts(res.data);
        } catch (error) {
            console.log("Error ", error);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    const demoPosts = [
        // ... (your existing data)
        {
            title: "abcd",
            description: "kj dkfj df dkfj dfkj ",
            author: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
        {
            title: "abcd",
            description: "kj dkfj df dkfj dfkj ",
            author: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
        {
            title: "abcd",
            description: "kj dkfj df dkfj dfkj ",
            author: "john doe",
            createdAt: "20 March 2020",
            votes: 39,
            solved: false,
        },
    ];

    return (    
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Help Post List</h1>
            {posts.length && (posts as Array<Post>).map((post: Post) => (
                <HelpPostItem key={post._id} post={post} />
            ))}
        </div>
    );
};

export default HelpPostList;
