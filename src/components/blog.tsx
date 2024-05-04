import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import * as lucid from "lucide-qwik";
const blogs = [
  {
    title: "i hate the  javascript and the edge but that ok",
    description: "rant about javascript and edge becaus its stoupid",
    date: "some date",
    link: "/blog/first",
  },
  {
    title: "blog title",
    description: "blog description",
    date: "some other date",
    link: "/blog/second",
  },
];
export default component$(() => {
  return (
    <div class=" flex flex-col">
      <div class=" text-center place-self-center  text-white  ">
        <hr class=" h-px my-5  bg-gray-800 border-0 flex w-full "></hr>
        <div class="  pb-2 ">
          Blogs entries <lucid.ArrowDownIcon class="inline ml-2" size={20} />
        </div>
        <ul class=" list-decimal flex flex-col">
          {blogs.map((blog, index) => {
            return (
              <li key={index} class="flex  flex-row align-top my-1">
                <Link
                  href={blog.link}
                  class="text-white
            hover:text-gray-400 text-left"
                >
                  <h2 class="text-2xl font-bold">{blog.title}</h2>
                  <h3 class="text-[#d3d3d3] pl">{blog.description}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
