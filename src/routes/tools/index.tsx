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
          "https://images.nightcafe.studio/jobs/T03JXPhTw4IpyN8feyEL/T03JXPhTw4IpyN8feyEL--1--9v6v3_6.9444x-real-esrgan-animevideo-v3.jpg?tr=w-1600,c-at_max",
      },
      {
        property: "og:image:width",
        content: "1600",
      },
      {
        property: "og:image:height",
        content: "900",
      },
      {
        property: "og:image:alt",
        content: "jean-philippe martel personal website",
      },
      {
        property: "og:site_name",
        content: "jean-philippe martel",
      },
      {
        property: "og:description",
        content: "jean-philippe martel personal website",
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
