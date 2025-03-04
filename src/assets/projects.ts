export interface Project {
  title: string;
  description?: string;
  image: string;
  link: string;
  publish: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    title: "Time to Timestamp",
    description: "Convert time to timestamp.",
    image: "/static/images/projects/time-to-timestamp.jpeg",
    link: "https://time-to-timestamp.vercel.app/",
    publish: true,
    date: "2024-02-16"
  }
];

export default projects;
