import type { StaticImageData } from "next/image";
import ex1 from "@/assets/projects/ex1.jpg";
import ex2 from "@/assets/projects/ex2.jpg";
import ex3 from "@/assets/projects/ex3.jpg";

type Project = {
  img: StaticImageData;
  name: string;
  description?: string;
};

export const projects: Project[] = [
  {
    img: ex1,
    name: "Exemplo de projeto 1",
  },
  {
    img: ex2,
    name: "Exemplo de projeto 2",
  },
  {
    img: ex3,
    name: "Exemplo de projeto 3",
  },
];
