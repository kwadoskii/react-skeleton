import { useState, useEffect } from "react";

import SkeletonArticle from "../skeletons/SkeletonArticle";

export default function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles && [1, 2, 3, 4, 5].map((i) => <SkeletonArticle key={i} theme="dark" />)}
    </div>
  );
}
