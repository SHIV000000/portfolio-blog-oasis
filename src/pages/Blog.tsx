import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding XAI in Modern Software Development",
      excerpt: "Exploring the importance of explainable AI in today's software landscape...",
      date: "2024-02-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Best Practices for Code Review",
      excerpt: "A comprehensive guide to conducting effective code reviews...",
      date: "2024-02-10",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "The Future of Web Development",
      excerpt: "Emerging trends and technologies shaping the future of web development...",
      date: "2024-02-05",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Blog Posts</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-muted p-6 rounded-lg hover:bg-muted/80 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <div className="text-primary text-sm">{post.readTime}</div>
              </div>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="text-sm text-primary">{post.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;