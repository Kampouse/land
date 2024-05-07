import { component$, Slot } from "@builder.io/qwik";

export const Heading = component$(() => {
  return (
    <div class="py-16 gap-20 text-center bg-[#221539]  rounded-xl  mb-6">
      <h1 class="p-0 m-0 font-mono  text-8xl font-normal tracking-tighter [word-spacing:0.3em] first-letter:font-bold first-letter:text-[#a52227] first-letter:text-[1.5em] text-white border-0">
        <Slot></Slot>
      </h1>
    </div>
  );
});
