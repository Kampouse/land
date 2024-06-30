import LandingLinks from "./landingButton";
import * as lucid from "lucide-qwik";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div class="flex flex-col      text-white text-left  rounded-xl   ">
      <p class="font-serif text-xl  text-center     text-white ">
        <span class="tracking-tighter font-extralight italic h-32 py-32">(Good People) {"=>"} Great Product! </span >
      </p>

      <div class="flex justify-center h-fit">
        <div class="flex flex-col gap-2 justify-center w-full">

          <div class="flex flex-row justify-center py-4">
            <h1 class="text-center text-white font-medium  text-3xl ">  story time </h1>
          </div >
          <h1 class=" place-self-center  text-2xl font-bold ">
            Web footprints {" "}
          </h1>
          <div class="place-self-center  gap flex flex-col lg:flex-row">
            <LandingLinks
              link="https://www.github.com/kampouse/"
              text="Contact me "
            >
              <lucid.MailIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://www.linkedin.com/in/jemartel/"
              text="linkedin "
            >
              <lucid.LinkedinIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://creator.nightcafe.studio/u/Kampouse"
              text="AI creations "
            >
              <lucid.BrushIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://www.github.com/kampouse/"
              text="github "
            >
              <lucid.GithubIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://www.github.com/kampouse/land"
              text="website code"
            >
              <lucid.GithubIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
          </div>
        </div>
      </div>
    </div>
  );
});
