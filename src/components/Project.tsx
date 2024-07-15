import { component$ } from "@builder.io/qwik";
import * as Lucid from "lucide-qwik";
import { Link } from "@builder.io/qwik-city";
import data from "../data/project.json"


interface Project {
  name: string;
  description: string;
  github: string;
  website: string;
  image: string;
}
const projects = data.projects as Array<Project>;
export default component$(() => {
  return (
    <div class="flex flex-col justify-center    w-full">
      <h1 class="text-center text-white text-2xl font-semibold pt-2"> Projects </h1>

      {
        projects.map((project) => {
          return (<div key={project.name} class="   lg:mx-0 mx-16  flex  flex-col ">
            <div class="flex flex-row gap-2 my-2 pb-2   justify-center content-center self-center">
              <h1 class="flex mt-2 pb-2 md:mt-0  flex-row gap-2 self-left lg:pb-0 md:pb-0 text-white text-2xl underline decoration-4 decoration-[#e6284b]  ">
                {" "}
                {project.name}{" "}

                <Link
                  href={project.github}
                  target="_blank"
                  class=" flex self-center"
                >
                  <Lucid.GithubIcon color="white" class="self-center" />
                </Link>
                <Link
                  href={project.website}
                  target="_blank"
                  class="flex"
                >
                  <Lucid.GlobeIcon color="white" class="self-center" />
                </Link>
              </h1>
            </div>
            <Link
              class="flex flex-col justify-center w-fit self-center"
              href={project.website}
              target="_blank"
            >
              <img src={project.image} width={500} height={500} class=" md:self-center md:scale-100 scale-125 lg:scale-100  my-2 md:my-0 lg:my-0 md:w-[500px] md:h-[50vh] w-[17em] h-[22vh] lg:w-[720px] self-center   border rounded-xl" />

            </Link>
            <h1 class="  text-center text-lg py-2 md:py-2 px-8 lg:w-[31.5em] text-white self-center  mt-2  w-96">
              {project.description}
            </h1>
          </div >
          )
        })
      }
    </div>
  );
});
