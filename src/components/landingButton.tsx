interface props {
  text: string;
  link: string;
}
import { Slot, component$ } from "@builder.io/qwik";

export default component$<props>((props) => {
  return (
    <a
      class=" flex border  border-red-50 justify-center  transition hover:text-[#e6284b] font-medium      m-1 p-2 lg:p-5 content-center    w-full lg:w-fit rounded-2xl hover:bg-[#1a74ba] text-white bg-clip-text text-transparent "
      target="_blank"
      href={props.link}
    >
      <h1 class="self-center">{props.text} </h1>
      <Slot name="icon" />
    </a>
  );
});
