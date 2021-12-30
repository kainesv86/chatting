import "./App.css";

function App() {
        return (
                <div className="App">
                        <div className="bg-gray-700 h-screen p-40">
                                <div className="bg-white h-full p-4 rounded items-start w-96">
                                        <ul className="flex flex-col">
                                                <li className="bg-blue-500 rounded-full py-2 px-4 font-medium w-fit text-right mb-1">Hello!</li>
                                                <li className="bg-gray-300 rounded-full py-2 px-4 font-medium w-fit text-left mb-1">Hi!</li>
                                        </ul>
                                </div>
                        </div>
                </div>
        );
}

export default App;
