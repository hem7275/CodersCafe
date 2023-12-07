import axios from "axios";
import { FC, useState } from "react";

interface FormType {
    title: string;
    description: string;
}

const HelpCreateForm: FC = () => {
    const [form, setForm] = useState<FormType>({
        title: "",
        description: "",
    });

    const fetcher = async (id: string) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/help/all`, {
                headers: {
                    authorization: `Basic ${id}`,
                    "Content-Type": "application/json",
                },
            });

            console.log(res.data);
        } catch (error) {
            console.log("Error ", error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = localStorage.getItem("currentUser");

        const user = JSON.parse(data || "");
        // console.log(user?._id);
        // console.log(form);

        fetcher(user.token);
    };

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {};

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col max-w-lg mt-10 mx-auto gap-5"
            >
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        value={form?.title}
                        className="border p-1 rounded "
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                        id="title"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <textarea
                        value={form?.description}
                        onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                        }
                        className="border p-1 rounded "
                        name="description"
                        id="description"
                        placeholder="description"
                        rows={8}
                    />
                </div>

                <input
                    type="submit"
                    value="Post"
                    className="border rounded p-2 hover:bg-slate-600 bg-slate-500 text-white cursor-pointer"
                />
            </form>
        </div>
    );
};

export default HelpCreateForm;
