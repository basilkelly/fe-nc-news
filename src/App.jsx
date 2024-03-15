import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import CommentAdder from "./components/CommentAdder";
import UserContext from "./contexts/User";
import { useState } from "react";
import Topics from "./components/Topics";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  //replace default with guest

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="articles/:article_id/postcomment"
          element={<CommentAdder />}
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
