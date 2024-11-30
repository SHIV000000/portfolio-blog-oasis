import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API
  const post = {
    title: "Understanding XAI in Modern Software Development",
    date: "2024-02-15",
    content: `
      Explainable AI (XAI) stands at the crossroads of AI capabilities and human understanding, seeming to be purely a
      technical concern at first glance. However, as we delve deeper, it becomes ever all the more
      fundamental human need to understand and trust.

      The last two years of my journey as a software engineer working in the domain of AI have been very
      exciting. I watched AI grow from being a niche research topic to a necessary component of
      responsible AI development. Models need to be built not only with the ability to make accurate
      predictions but also with the capability to explain the reasoning behind those
      predictions.

      This field is rapidly changing with the emergence of newer techniques and tools. With this, I think
      that it would be the duty of AI practitioners to be up to date about new developments and to
      bring explainability to new AI systems from the bottom up.

      In this foreseeable future, I think that we will see XAI become an integral part.
    `,
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-primary mb-8">{post.date}</div>
        <div className="prose prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;