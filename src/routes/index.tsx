import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";




export default component$(() => {
const  userName = useSignal("jemartel")
const setName = $(()=>{

        if(userName.value == "jemartel") {
              userName.value = "jean-philippe martel"
        }
        else {
              userName.value = "jemartel"

        }
    });
  return (
    <>
      <header class="flex items-center justify-center  bg-fixed   bg-top  bg-contain bg-no-repeat   custom-img h-[25em]    ">
        <div onClick$={()=> setName()} class="   cursor-pointer flex justify-center  p-10  text-4xl  font-bold   from-zinc-50 to-gray-800  text-white bg-[#221539]  opacity-[65%] rounded-xl">
        

        {userName.value  ==  "jemartel" ?

          <h2 class="  typed-out  font-display text-4xl underline"> hello i am {userName} ~ </h2> : <h1 class="   typed-out  font-display text-4xl underline">
          am actual     {userName} ~
          </h1> }  
  
  
  
  
  
        </div>
      </header>

      <main class=" flex  justify-center bg-gradient-to-b   from-[#221539] to-slate-900  h-screen">
        <div class="flex flex-col">
          <h1 class=" text-5xl font-medium tracking-widest underline decoration-4   bio-Rhyme     bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent pt-5">
            (good people) {"=>"} great product
          </h1>
          <hr class=" h-px my-2 bg-gray-800 border-0 d"></hr>
          <div class="flex flex-col   text-white text-left  rounded-xl  gap-5 ">

            <p class="font-serif text-xl  text-center     text-white ">
              chill Canadien 🇨🇦 <br></br>  that  enjoy   Problem solving <br />
              from the depths of system programming  to <br />
              the heights of clowning around with the
              latest  web technologies
            </p>
            <hr class=" h-px my-2 bg-gray-800 border-0 d"></hr>


          </div>
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
