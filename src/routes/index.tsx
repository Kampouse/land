import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as  lucid from "lucide-qwik";
export default component$(() => {
  const userName = useSignal("jemartel");
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
      <header class="flex flex-col items-center justify-center  bg-fixed   bg-top  bg-contain bg-no-repeat   custom-img    md:h-[20em] lg:h-[25em]    ">
        <div
          onClick$={() => setName()}
          class="   cursor-pointer flex justify-center   p-2 md:p-10 lg:p-10    font-bold   from-zinc-50 to-gray-800  text-white bg-[#221539]  opacity-[65%] rounded-xl"
        >
          {userName.value == "jemartel" ? (
            <h2 class="  typed-out  font-display   underline">
              {" "}
              hello i am {userName} ~{" "}
            </h2>
          ) : (
            <h1 class="   typed-out  font-display  underline">
              am actualy {userName} ~
            </h1>
          )}
        </div>
        <h1 class=" text-2xl md:text-5xl lg:text-5xl  px-5 font-medium tracking-widest underline decoration-4   bio-Rhyme     bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent pt-5">
          (good people) {"=>"} great product
        </h1>
      </header>
      <main class=" flex  justify-center bg-gradient-to-b md:m-2 lg:m-2        from-[#221539] to-slate-900  ">
        <div class="flex flex-col">
          <div class="flex flex-col      text-white text-left  rounded-xl   ">
            <p class="font-serif text-xl  text-center     text-white ">
              chill Canadian 🇨🇦 <br></br> that enjoy Problem solving <br />
              from the depths of system programming to <br />
              the heights of clowning around with the latest web technologies
            </p>
            <hr class=" h-px my-5 bg-gray-800 border-0 flex w-full "></hr>
            <div class="flex  justify-center w-screen ">
            </div>
            <div class="flex justify-center m-5">
              <div class="flex flex-col gap-2 justify-center w-full">
                <div class=" place-self-center ">
                  learn more about me   <lucid.ArrowDownIcon class="inline ml-2" size={20} />
                </div>
                <div class="place-self-center p-5">
                  <h1> </h1>
                  <a
                    class="border  border-red-50 self-center   m-2 p-5    w-fit rounded-2xl hover:bg-[#1a74ba] text-white bg-clip-text text-transparent "
                    target="_blank"
                    href="https://www.linkedin.com/in/jemartel/"
                  >
                    what up {"=>  "}
                    <lucid.LinkedinIcon class="inline hover:bg-blue" size={20} />
                  </a>

                  <a
                    class="  border border-red-50 self-center   m-2 p-5    w-fit rounded-2xl hover:bg-[#1a74ba]   text-white  bg-gradient-to-r  bg-clip-text text-transparent "
                    target="_blank"
                    href="https://creator.nightcafe.studio/u/Kampouse"
                  >
                    creations  {"=>  "}
                    <lucid.BrushIcon class="inline hover:bg-blue" size={20} />
                  </a>

                  <a
                    class="border border-red-50   self-center   m-2 p-5    w-fit rounded-2xl hover:bg-[#1a74ba]   text-white   bg-clip-text text-transparent pt-5"
                    target="_blank"
                    href="https://www.github.com/kampouse/"
                  >
                    my hub {"=>  "}
                    <lucid.GithubIcon class="inline hover:bg-blue" size={20} />
                  </a>
                  <a
                    class="text-white align-middle   border border-red-50 self-center m-2    p-5    w-fit rounded-2xl hover:bg-[#1a74ba]   bg-clip-text text-transparent"
                    target="_blank"
                    href="https://www.github.com/kampouse/land"
                  >
                    this website {"=>  "}
                    <lucid.CodeIcon class="inline hover:bg-blue" size={20} />
                  </a>

                </div>
              </div >
            </div>
          </div>
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
        name: "description",
        content: "my personal website ",
      },
    ],
  };
};
