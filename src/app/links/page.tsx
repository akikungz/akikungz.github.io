import Links from "@/assets/links";

export default function LinksPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Links Collection</h1>
      <p className="mt-4">
        Here are some useful links that I have collected.
      </p>

      <div className="mt-4">
        <ul className="list-disc list-inside pl-4">
          {Object.entries(Links).map(([title, links]) => (
            <li key={title} className="list-item">
              <a href={links.href} className="text-blue-400" target="_blank">{links.children}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}