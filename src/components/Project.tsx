import { component$ } from "@builder.io/qwik";
import * as Lucid from "lucide-qwik"
import Background from "../media/coffee.png?jsx";
export default component$(() => {
  return (
    <div class="flex flex-col justify-center py-4  gap-2">
      <h1 class="text-center text-white text-2xl"> Projects </h1>

      <div class="mx-4 gap-2 pt-4  " >


        <div class="flex flex-row gap-2 pb-2  content-center">
          <h1 class="pl-4   text-white text-2xl  "> Coffee Now </h1>
          <Lucid.GithubIcon color="white" class="self-center " />
          <Lucid.GlobeIcon color="white" class="self-center " />
        </div >
        <Background class="  w-[720px] h-[500] border rounded-xl" />

      </div>
      <div class="flex flex-row text-white justify-center py-4" >
      </div  >

    </ div >
  );
})
