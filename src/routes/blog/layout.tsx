import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./style.css?inline";
export default component$(() => {
  useStyles$(styles);
  return (
    <div class=" flex bg-hero-pattern bg-cotain min-h-screen bg-cover bg-repeat-y ">
      <div class="flex   bg-gradient-to-b my-4 mx-2 lg:mx-8   rounded-xl   w-full        from-[#221539] to-slate-900 ">
        <article class="post mx-4   md:mx-24 lg:mx-56">
          <Slot />
        </article>
      </div>
    </div>
  );
});
