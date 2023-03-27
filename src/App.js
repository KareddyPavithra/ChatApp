import { ChatEngine } from "react-chat-engine";

import ChatFeed  from "./components/ChatFeed";

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="c3ba976d-76e9-484e-9822-0e562ffccde7"
            userName="Pavithra K"
            userPassword="Pavithra123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;