import {
  FaGithub,
  FaGoogle,
  FaYoutube,
  FaFacebook,
  FaX,
} from "react-icons/fa6";

export interface Link {
  [key: string]: {
    href: string;
    children: string;
  };
}

export const links: Link = {
  "flowchart-in-daily-life": {
    href: "https://kmutnbacth-my.sharepoint.com/:p:/g/personal/s6506022620036_kmutnb_ac_th/ETQe4Id7MEBNooZ_-YNJRMYBBFaNhxp5BEYoVmEKMxiV0w?e=U9iptV",
    children:
      "Flowchart in Daily Life (Adjust the basics for students at IT Department KMUTNB@2024)",
  },
  "flowchart-in-programming": {
    href: "https://kmutnbacth-my.sharepoint.com/:p:/g/personal/s6506022620036_kmutnb_ac_th/EYdKiQXb4KFJpLydhWTTZCwB1a5syCjbYn6GGxd4S4rGrg",
    children: "Flowchart in Programming (Adjust the basics for students at IT Department KMUTNB@2025)"
  }
};

export default links;

export interface Bookmark {
  href: string;
  className: string;
  icon: React.ReactNode;
}

export const bookmarks: Bookmark[] = [
  {
    href: "https://github.com",
    className: "bg-gray-500",
    icon: <FaGithub size="lg" />,
  },
  {
    href: "https://google.com",
    className: "bg-blue-500",
    icon: <FaGoogle size="lg" />,
  },
  {
    href: "https://youtube.com",
    className: "bg-red-500",
    icon: <FaYoutube size="lg" />,
  },
  {
    href: "https://facebook.com",
    className: "bg-blue-600",
    icon: <FaFacebook size="lg" />,
  },
  {
    href: "https://x.com",
    className: "bg-black",
    icon: <FaX size="lg" />,
  },
];
