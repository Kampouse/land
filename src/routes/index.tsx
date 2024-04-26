import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as lucid from "lucide-qwik";
import LandingLinks from "~/components/landingButton";
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
            <div class="flex  justify-center w-screen "></div>
            <div class="flex justify-center m-5">
              <div class="flex flex-col gap-2 justify-center w-full">
                <div class=" place-self-center ">
                  learn more about me{" "}
                  <lucid.ArrowDownIcon class="inline ml-2" size={20} />
                </div>
                <div class="place-self-center p-5">
                  <LandingLinks
                    link="https://www.linkedin.com/in/jemartel/"
                    text="what up  =>"
                  >
                    <lucid.LinkedinIcon
                      q:slot="icon"
                      class="inline ml-2"
                      size={20}
                    />
                  </LandingLinks>
                  <LandingLinks
                    link="https://creator.nightcafe.studio/u/Kampouse"
                    text="creations  =>"
                  >
                    <lucid.BrushIcon
                      q:slot="icon"
                      class="inline ml-2"
                      size={20}
                    />
                  </LandingLinks>

                  <LandingLinks
                    link="https://www.github.com/kampouse/"
                    text="my hub =>"
                  >
                    <lucid.GithubIcon
                      q:slot="icon"
                      class="inline ml-2"
                      size={20}
                    />
                  </LandingLinks>
                  <LandingLinks
                    link="https://www.github.com/kampouse/land"
                    text=" this website =>"
                  >
                    <lucid.GithubIcon
                      q:slot="icon"
                      class="inline ml-2"
                      size={20}
                    />
                  </LandingLinks>
                </div>
              </div>
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
