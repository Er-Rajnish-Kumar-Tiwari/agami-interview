import { useEffect, useState } from "react";
import api from "../API/api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get("/articles").then(res => setArticles(res.data));
  }, []);

  return (
    <div className="p-6 grid gap-4">
      {articles.map(a => (
        <div key={a._id} className="border p-4 rounded">
          <h2 className="font-bold">{a.title}</h2>
          <p>{a.updatedContent || a.content}</p>
        </div>
      ))}
    </div>
  );
}
