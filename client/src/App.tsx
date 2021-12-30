import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as socketIo from "socket.io-client";
const socket = socketIo.connect("http://localhost:4000/chat", { path: "/socket.io" });

function App() {
        interface ChatLogProps {
                user: number;
                message: string;
        }
        const [chatLog, setChatLog] = useState<Array<ChatLogProps>>([
                { user: 0, message: "Hello" },
                { user: 1, message: "Hi! My name is Kainé, K A I N É, I'm 20, FPT University student... and well, I'm " },
        ]);

        const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

        useEffect(() => {
                socket.on("message", (data: ChatLogProps) => {
                        // console.log(data);
                        setChatLog([...chatLog, data]);
                });
        });

        const onSubmit = async (data: ChatLogProps) => {
                socket.emit("message", data);
        };

        useEffect(() => {}, []);

        return (
                <div className="App">
                        <div className="bg-gray-700 h-screen p-40">
                                <div className="bg-white h-full rounded items-start w-96 relative">
                                        <div className="p-4">
                                                <ul className="flex flex-col">
                                                        {chatLog.map(({ message, user }, index) => (
                                                                <li
                                                                        key={index}
                                                                        className={`flex ${user !== 0 ? "justify-end ml-16" : "justify-start mr-16"}`}
                                                                >
                                                                        <p
                                                                                className={`${
                                                                                        user !== 0 ? "bg-blue-500" : "bg-gray-300"
                                                                                } rounded-3xl py-2 px-4 font-normal w-fit mb-1 text-left`}
                                                                        >
                                                                                {message}
                                                                        </p>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                        <form
                                                className="bg-gray-800 bottom-0 right-0 absolute w-full h-16 px-3 items-center flex"
                                                onSubmit={handleSubmit(onSubmit)}
                                        >
                                                <input
                                                        type="text"
                                                        className="bg-gray-100 rounded-3xl p-2 flex-1 outline-none px-4 w-auto mr-1"
                                                        {...register("message")}
                                                />
                                                <input type="text" className="hidden" {...register("user")} value={0} />
                                                <button type="submit" className="bg-gray-100 rounded-full p-2 h-10 w-10">
                                                        +
                                                </button>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}

export default App;
