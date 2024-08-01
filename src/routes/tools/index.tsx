import { type DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { HomeIcon } from "lucide-qwik";
import Projects from "~/components/Project";
import type { Project } from "~/components/Project";
import data from "./tools.json";
import LandingButton from "~/components/landingButton";
export default component$(() => {
  const project = data.projects as Array<Project>;
  return (
    <div class=" gap-20">
      <Projects title="Tools <3" projects={project} />
      <div class="w-full flex justify-center py-2 pb-32">
        <LandingButton link="/" text="home  " target={true}>
          <HomeIcon q:slot="icon" class="ml-2" size={20} />
        </LandingButton>
      </div>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "jemartel ~ Developer Tools",
    meta: [
      {
        property: "og:image",
        content: "https://s6.imgcdn.dev/bI6Je.png",
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
        content:
          "compiled list of tools for developers by jean-philippe martel for front-end devs",
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
