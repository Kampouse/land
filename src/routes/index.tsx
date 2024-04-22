import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
<header
  class="flex items-center justify-center      bg-fixed   bg-top  bg-contain bg-no-repeat   custom-img h-[25em]    "
>
  <div class=" flex justify-center  p-10  text-4xl  font-bold   from-zinc-50 to-gray-800  text-white bg-[#221539]  opacity-[65%] rounded-xl">
    <h2 class="   font-display text-4xl"> hello  i am  jemartel ~ </h2>
  </div>
</header>


<main  class= " flex  justify-center bg-gradient-to-b   from-[#221539] to-slate-900  h-screen">



 <div class="flex flex-col">
 <h1 class=" text-5xl font-medium tracking-widest underline decoration-4   bio-Rhyme     bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent pt-5">

     (good people)    {'=>'}  great product 
 </h1>
  <hr class=" h-px my-2 bg-gray-800 border-0 d"></hr>





 </div>


</main>


 


    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
