import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog";
import Introduction from "~/components/introduction";
import * as lucid from "lucide-qwik";
import Projects from "~/components/Project";
export default component$(() => {
  const userName = useSignal("Jean-philippe martel");
  const setName = $(() => {
    if (userName.value == "jemartel") {
      userName.value = "jean-philippe martel";
      document.title = "jean-philippe  ~ personal website";
    } else {
      userName.value = "jemartel";
      document.title = "jemartel ~ personal website";
    }
  });

  return (
    <>
      <header class="flex flex-col items-center lg:justify-center lg:pt-20  bg-fixed   bg-top  bg-contain bg-no-repeat   custom-img    h-[8em] md:h-[20em] lg:h-[30em]     ">
        <div class="m-8 lg:m-0      " onClick$={setName}>
          <div class=" font-bold lg:p-8 px-8 py-2  from-zinc-50 to-gray-800  text-white bg-[#221539]  opacity-[65%] rounded-xl cursor-pointer flex  text-center flex-col justify-center ">
            {userName.value == "jemartel" ? (
              <h2 class=" text-center  typed-out  font-display   underline">
                {" "}
                {userName} ~{" "}
              </h2>
            ) : (
              <h1 class=" text-center   typed-out  font-display  underline">
                hello am &nbsp;
                {userName} ~
                <lucid.HeartIcon size={20} color="red" class="inline mx-2" />
              </h1>
            )}
          </div>
        </div>
      </header>
      <h1 class="  text-2xl leading-0 md:text-5xl lg:text-5xl    px-5 py-4 lg:py-8 lg:pb-1 font-medium tracking-widest underline    bio-Rhyme     bg-gradient-to-r text-center from-primary to-danger bg-clip-text text-transparent ">
        Passionate software craftman & creative tinkering
      </h1>

      <main class=" flex   justify-center bg-gradient-to-b md:m-2 lg:m-2 from-[#221539] to-slate-900   ">
        <div class="flex flex-col w-full">
          <Introduction />

          <Projects />

          <Blog />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "jemartel ~ personal website",
    meta: [
      {
        property: "og:image",
        content:
          "https://images.nightcafe.studio/jobs/T03JXPhTw4IpyN8feyEL/T03JXPhTw4IpyN8feyEL--1--9v6v3_6.9444x-real-esrgan-animevideo-v3.jpg?tr=w-1600,c-at_max",
      },
      {
        property: "og:image:width",
        content: "1600",
      },
      {
        property: "og:image:height",
        content: "900",
      },
      {
        property: "og:image:alt",
        content: "jean-philippe martel personal website",
      },
      {
        property: "og:site_name",
        content: "jean-philippe martel",
      },
      {
        property: "og:description",
        content: "jean-philippe martel personal website",
      },
      {
        property: "og:title",
        content: "jean-philippe martel",
      },
      {
        property: "og:url",
        content: "https://jemartel.com",
      },
    ],
  };
};
