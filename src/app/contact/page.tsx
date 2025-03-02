export default function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      
      <p className="mt-4">
        You can contact me via email at <a href="mailto:akikungz@outlook.me" className="text-blue-400" target="_blank">akikungz@outlook.me</a>
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <span>Or you can find me on social media:</span>
        <ul className="list-disc list-inside pl-4">
          <li className="list-item">
            <a href="https://facebook.com/akikungz" className="text-blue-400" target="_blank">Facebook (@akikungz)</a>
          </li>
          <li className="list-item">
            <a href="https://twitter.com/akikungz" className="text-blue-400" target="_blank">Twitter (@akikungz)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}