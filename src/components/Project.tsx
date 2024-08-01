import { component$ } from "@builder.io/qwik";
import * as Lucid from "lucide-qwik";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";

export type Project = {
  name: string;
  description: string;
  github?: string;
  website?: string;
  image: string;
};
export interface ProjectProps {
  title?: string;
  projects: Array<Project>;
}

const Project = component$<Project>((project) => {
  return (
    <div key={project.name} class="   lg:mx-0 mx-16  flex  flex-col ">
      <div class="flex flex-row gap-2 my-2 pb-2   justify-center content-center self-center">
        <h1 class="flex mt-2 pb-2 md:mt-0  flex-row gap-2 self-left lg:pb-0 md:pb-0 text-white text-2xl underline decoration-4 decoration-[#e6284b]  ">
          {" "}
          {project.name}{" "}
          {!project.github ? null : (
            <Link
              href={project.github}
              target="_blank"
              class=" flex self-center"
            >
              <Lucid.GithubIcon color="white" class="self-center" />
            </Link>
          )}
          <Link href={project.website} target="_blank" class="flex">
            <Lucid.GlobeIcon color="white" class="self-center" />
          </Link>
        </h1>
      </div>
      <Link
        class="flex flex-col justify-center  md:w-[720px] w-[15em] self-center bg-slate-800 bg-opacity-25 rounded-xl h-fit pb-2"
        href={project.website}
        target="_blank"
      >
        <Image
          src={project.image}
          class=" md:self-center md:scale-100 scale-125 lg:scale-100  rounded-xl rounded-b-none my-2 md:my-0 lg:my-0   self-center   "
        />
        <h1 class="   rounded-md  text-center text-lg py-4 p md:py-2 px-8 lg:w-[31.5em] text-white self-center  mt-2  w-96">
          {project.description}
        </h1>
      </Link>
    </div>
  );
});

export default component$<ProjectProps>((projects) => {
  return (
    <div class="flex flex-col justify-center    w-full">
      <h1 class="text-center text-white text-2xl font-semibold pt-2">
        {" "}
        {!projects.title ? null : projects.title}
      </h1>
      {projects.projects.map((project) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            github={project.github}
            website={project.website}
            image={project.image}
          />
        );
      })}
    </div>
  );
});
