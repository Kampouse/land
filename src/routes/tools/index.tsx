import { type DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import Projects from "~/components/Project";
import type { Project } from "~/components/Project";
import data from "./tools.json";
export default component$(() => {
  const project = data.projects as Array<Project>;
  return <Projects title="tools <3" projects={project} />;
});

export const head: DocumentHead = () => {
  return {
    title: "jemartel ~ Developer Tools",
    meta: [
      {
        property: "og:image",
        content:
          "https://s6.imgcdn.dev/bI6Je.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "jean-philippe martel  tools for developers",
      },
      {
        property: "og:site_name",
        content: "jean-philippe martel",
      },
      {
        property: "og:description",
        content: "jean-philippe martel collection of tools for developers",
      },
      {
        property: "og:title",
        content: "Tools for developers",
      },
      {
        property: "og:url",
        content: "https://jemartel.com",
      },
    ],
  };
};
