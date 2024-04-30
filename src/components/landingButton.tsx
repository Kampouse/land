interface props {
  text: string;
  link: string;
}
import { Slot, component$ } from "@builder.io/qwik";

export default component$<props>((props) => {
  return (
    <a
      class="border  border-red-50 self-center   m-2 p-2 lg:p-5     w-20 lg:w-fit rounded-2xl hover:bg-[#1a74ba] text-white bg-clip-text text-transparent "
      target="_blank"
      href={props.link}
    >
      {props.text}
      <Slot name="icon" />
    </a>
  );
});
