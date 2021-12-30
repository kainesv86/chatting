import "./App.css";
import { Route, Switch } from "react-router-dom";
import ChatLog from "./components/chat";

function App() {
        return (
                <div className="App">
                        <div className="bg-gray-700 h-screen p-40">
                                <Switch>
                                        <Route path="/user/0">
                                                <ChatLog userIndex={0} />
                                        </Route>
                                        <Route path="/user/1">
                                                <ChatLog userIndex={1} />
                                        </Route>
                                </Switch>
                        </div>
                </div>
        );
}

export default App;
