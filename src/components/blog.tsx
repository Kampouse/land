import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import data from "~/data.json";
import * as lucid from "lucide-qwik";

type BlogEntry = {
  title: string;
  description: string;
  date: string;
  link: string;
};

let blogEntries = [] as Array<BlogEntry>;
const getBlogEntries = () => {
  return data;
};
blogEntries = getBlogEntries();
export default component$(() => {
  const navi = useNavigate();

  return (
    <div class=" flex flex-col">
      <div class=" text-center place-self-center  text-white  ">
        <hr class=" h-px my-2  bg-gray-800 border-0 flex w-full "></hr>
        <div class="  pb-2 text-2xl font-medium ">
          Blogs entries <lucid.ArrowDownIcon class="inline ml-2" size={20} />
        </div>
        <ul
          class="flex flex-col mx-2 mb-4"
          about="list of blog entries"
          aria-label="list of blog entries"
        >
          {blogEntries.map((blog: BlogEntry) => {
            return (
              <li
                class=" text-white text-left m-2 cursor-pointer   border-opacity-40  border-b-2  py-4 border-[#e6284b] border rounded-lg transition ease-linear hover:bg-opacity-75  hover:scale-105 hover:shadow-lg"
                onClick$={() => navi(blog.link)}
                key={blog.title}
                aria-label="blog entrie"
              >
                <Link
                  class="text-left  text-xl px-4"
                  href={blog.link}
                  aria-label="link to blog"
                  about="link to blog"
                >
                  {blog.title}
                </Link>
                <h3 class=" border-opacity-40  text-sm px-4   text-center  text-gray-400">
                  {" "}
                  {blog.description}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
