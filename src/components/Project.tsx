import { component$ } from "@builder.io/qwik";
import * as Lucid from "lucide-qwik";
import { Link } from "@builder.io/qwik-city";
import Background from "../media/coffee.png?jsx";

/*
interface Project {
  name: string;
  description: string;
  github: string;
  website: string;
  image: string;
}
*/
export default component$(() => {
  return (
    <div class="flex flex-col justify-center py-4  gap-2 w-full">
      <h1 class="text-center text-white text-2xl"> Projects </h1>

      <div class="  pt-4 lg:mx-0 mx-16  flex  flex-col ">
        <div class="flex flex-row gap-4 pb-2   justify-center content-center self-center">
          <h1 class="self-left lg:pb-1 text-white text-2xl underline decoration-4 decoration-[#e6284b]  ">
            {" "}
            Coffee Now{" "}
          </h1>
          <Link
            href="https://github.com/kampouse/coffee"
            target="_blank"
            class=" flex self-center"
          >
            <Lucid.GithubIcon color="white" class="self-center" />
          </Link>
          <Link
            href="https://coffee-plum-two.vercel.app/"
            target="_blank"
            class="flex "
          >
            <Lucid.GlobeIcon color="white" class="self-center " />
          </Link>
        </div>
        <Background class=" lg:self-center scale-125 lg:scale-100 my-4 lg:my-0 lg:w-[720px] lg:h-[500] border rounded-xl" />
      </div>
      <h1 class="  lg:text-center py-2 px-8 lg:w-[31.5em] text-white self-center w-96">
        text here because I am not done yet i thin you should be able to see
        this text here or maybe not I am not sure maybe I should add more text
        here
      </h1>
    </div>
  );
});
