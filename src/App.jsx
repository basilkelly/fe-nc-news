import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import CommentAdder from "./components/CommentAdder";
import UserContext from "./contexts/User";
import { useState } from "react";
import ArticlesPage from "./components/ArticlesPage";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("Guest");
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="articles/:article_id/postcomment"
          element={<CommentAdder />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
