import { component$ } from "@builder.io/qwik";
import { Link, server$, useNavigate } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";
import data from "~/data.json";
import * as lucid from "lucide-qwik";
const blogs = [
  {
    title: "i hate the  javascript and the edge but that ok",
    description: "rant about javascript and edge becaus its stoupid",
    date: "some date",
    link: "/blog/first",
  },
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

type BlogEntry = {
  title: string;
  description: string;
  date: string;
  link: string;
};

let blogEntries = Array<BlogEntry>();

const getBlogEntries = () => {
  return data as BlogEntry[];
};
blogEntries = getBlogEntries();
export default component$(() => {
  const navi = useNavigate();

  return (
    <div class=" flex flex-col">
      <div class=" text-center place-self-center  text-white  ">
        <hr class=" h-px my-5  bg-gray-800 border-0 flex w-full "></hr>
        <div class="  pb-2 ">
          Blogs entries <lucid.ArrowDownIcon class="inline ml-2" size={20} />
        </div>
        <ul
          class="  list-decimal flex flex-col  mb-4"
          about="list of blog entries"
          aria-label="list of blog entries"
        >
          {blogEntries.map((blog) => {
            return (
              <li
                class=" text-white text-left m-2 cursor-pointer   border-opacity-40  border-b-2  border-gray-800 border rounded-lg transition ease-linear hover:bg-opacity-75  hover:scale-105 hover:shadow-lg"
                onClick$={() => navi(blog.link)}
                key={blog.title}
                aria-label="blog entry"
              >
                <Link
                  class="text-left  text-xl  ml-5"
                  href={blog.link}
                  aria-label="link to blog"
                  about="link to blog"
                >
                  {blog.title}
                </Link>
                <h3 class=" border-opacity-40  text-sm   text-center ml-5 text-gray-400">
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
