import "./App.css";
import { useState } from "react";
import Note from "../Note/Note";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Note user={user} />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
