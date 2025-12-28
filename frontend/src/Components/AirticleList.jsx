import { useEffect, useState } from "react";
import api from "../API/api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get("/articles").then(res => setArticles(res.data));
  }, []);

  return (
    <div className="p-6 grid gap-6 max-w-4xl mx-auto">
      {articles.map(article => (
        <div
          key={article._id}
          className="border rounded-lg p-5 shadow-sm bg-white"
        >
          {/* Title */}
          <h2 className="text-xl font-semibold mb-2">
            {article.title}
          </h2>

          {/* Content */}
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {article.updatedContent || article.content}
          </p>

          {/* References */}
          {article.references && article.references.length > 0 && (
            <div className="mt-4 border-t pt-3">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                References
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {article.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
