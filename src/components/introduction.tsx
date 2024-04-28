import LandingLinks from "./landingButton";
import * as lucid from "lucide-qwik";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div class="flex flex-col      text-white text-left  rounded-xl   ">
      <p class="font-serif text-xl  text-center     text-white ">
        chill Canadian 🇨🇦 <br></br> that enjoy Problem solving <br />
        from the depths of system programming to <br />
        the heights of clowning around with the latest web technologies
      </p>
      <hr class=" h-px my-5 bg-gray-800 border-0 flex w-full "></hr>
      <div class="flex justify-center h-fit">
        <div class="flex flex-col gap-2 justify-center w-full">
          <div class=" place-self-center ">
            learn more about me{" "}
            <lucid.ArrowDownIcon class="inline ml-2" size={20} />
          </div>
          <div class="place-self-center p-5">
            <LandingLinks
              link="https://www.linkedin.com/in/jemartel/"
              text="what up  =>"
            >
              <lucid.LinkedinIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://creator.nightcafe.studio/u/Kampouse"
              text="creations  =>"
            >
              <lucid.BrushIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://www.github.com/kampouse/"
              text="my hub =>"
            >
              <lucid.GithubIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
            <LandingLinks
              link="https://www.github.com/kampouse/land"
              text=" this website =>"
            >
              <lucid.GithubIcon q:slot="icon" class="inline ml-2" size={20} />
            </LandingLinks>
          </div>
        </div>
      </div>
    </div>
  );
});
