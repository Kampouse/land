import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import Introduction from "~/components/introduction";
let og = "";
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

  const location = useLocation();
  console.log(location.url.origin);
  og = location.url.origin + "/og-image";

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
          <Introduction />
        </div>
      </main>
    </>
  );
});
