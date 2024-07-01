import { component$ } from "@builder.io/qwik";
import * as Lucid from "lucide-qwik"
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
    <div class="flex flex-col justify-center py-4  gap-2">
      <h1 class="text-center text-white text-2xl"> Projects </h1>

      <div class="mx-4 gap-2 pt-4  " >
        <div class="flex flex-row gap-4 pb-2  content-center">
          <h1 class="pl-4   text-white text-2xl underline decoration-4 decoration-[#e6284b]  "> Coffee Now </h1>
          <Link href="https://github.com/kampouse/coffee" target="_blank" class="">
            <Lucid.GithubIcon color="white" class="self-center" />
          </Link>
          <Link href="https://coffee-plum-two.vercel.app/" target="_blank" class="">
            <Lucid.GlobeIcon color="white" class="self-center " />
          </Link>




        </div >
        <Background class="   w-[720px] h-[500] border rounded-xl" />

      </div>
      <div class="flex flex-row text-white justify-center py-4" >
      </div  >

    </ div >
  );
})
