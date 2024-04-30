import { component$ } from "@builder.io/qwik";
import * as lucid from "lucide-qwik";
const blogs = [
  {
    title: "i hate the  javascript and the edge but that ok",
    description: "rant about javascript and edge becaus its stoupid",
    date: "some date",
    link: "blog link",
  },
  {
    title: "blog title",
    description: "blog description",
    date: "blog date",
    link: "blog link",
  },
];
export default component$(() => {
  return (
    <div class=" flex flex-col">
      <div class=" text-center place-self-center  text-white  mt-2 ">
        <hr class=" h-px my-5  bg-gray-800 border-0 flex w-full "></hr>
        <div class="  pb-2 ">
          Blogs entries <lucid.ArrowDownIcon class="inline ml-2" size={20} />
        </div>
        <ul class="gap-3 list-decimal m-7">
          {blogs.map((blog, index) => {
            return (
              <li class="m-2  divide-dashed cursor-pointer" key={blog.title}>
                <h1 class="text-left text-lg  ">{blog.title}</h1>
                <h5 class="text-left text-sm text-gray-400">
                  {blog.description}
                </h5>
                {index == blogs.length - 1 ? null : (
                  <hr class=" h-px my-5   bg-gray-800 border-0 flex w-full "></hr>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
