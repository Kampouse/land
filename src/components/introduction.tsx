import LandingLinks from "./landingButton";
import * as lucid from "lucide-qwik";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div class="flex flex-col      text-white text-left  rounded-xl  w-full ">
      <p class="font-serif text-xl  text-center     text-white ">
        <span class="tracking-tighter font-extralight italic h-32 py-32">
          (Good People) {"=>"} Great Product!{" "}
        </span>
      </p>

      <div class="flex justify-center h-fit w-full ">
        <div class="flex flex-col gap-2  justify-center w-full">
          <div class="flex self-center text-center flex-col text-2xl font-light justify-center my-1  lg:px-8   rounded-xl  lg:w-[25em] px-8 ">
            Writing computer logic is fun, its an endless sandbox. the web
            plaform is even more fun, its a multiplayer sandbox that can be
            shared with the world. I been digging in the sandbox for a while
            now, and I have a few things to show for it. Am available for hire
            as a well rounded developper, or to collaborate on a project.
          </div>
          <h1 class=" place-self-center  text-2xl font-bold ">
            Web footprints{" "}
          </h1>
          <div class="place-self-center  gap flex flex-col lg:flex-row">
            <LandingLinks
              link="https://www.linkedin.com/in/jemartel/"
              text="linkedin"
            >
              <lucid.LinkedinIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://cal.com/Kampouse/30min"
              text="Book a meeting"
            >
              <lucid.PhoneIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="mailto:jp@jemartel.dev"
              text="Mail Me"
            >
              <lucid.MailIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>

            <LandingLinks
              link="https://creator.nightcafe.studio/u/Kampouse"
              text="AI creations"
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
