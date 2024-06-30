import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./style.css?inline";
export default component$(() => {
  useStyles$(styles);
  return (
    <div class=" flex bg-hero-pattern bg-cotain min-h-screen bg-cover bg-repeat-y ">
      <div class="flex    m-2 lg:mx-8   rounded-xl   w-full py-6        bg-[#291D53] ">
        <article class="post mx-4  my-3  md:mx-24 lg:mx-40 max">
          <Slot />
        </article>
      </div>
    </div>
  );
});
