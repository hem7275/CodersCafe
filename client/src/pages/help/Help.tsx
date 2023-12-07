import React from "react";
import HelpPostList from "../../components/help/HelpPostList";
import CommentList from "../../components/comment/CommentList";
import { Link } from "react-router-dom";

const HelpPage: React.FC = () => {
    return (
        <div>
            <button className="mx-auto bg-red-500 m-5 rounded-xl px-3 py-2 w-fit">
                <Link to="create">Create</Link>
            </button>
            <HelpPostList />
        </div>
    );
};

export default HelpPage;
