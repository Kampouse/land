import { component$, Slot } from "@builder.io/qwik";

export const Heading = component$(() => {
  return (
    <div class="     gap-20 text-left   rounded-xl  mb-6">
      <h1 class=" font-mono  text-8xl font-normal tracking-tighter [word-spacing:0.3em] first-letter:font-bold first-letter:text-[#a52227] first-letter:text-[1.5em] text-white border-0">
        <Slot />
      </h1>
    </div>
  );
});
