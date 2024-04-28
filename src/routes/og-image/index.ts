import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchFont, ImageResponse, html } from "og-img";

export const onGet: RequestHandler = async (req) => {
  req.send(
    new ImageResponse(
      // Use Tailwind CSS or style attribute
      html`
        <div tw="text-4xl  " style="background-color: red">
          jemartel / porfolio
        </div>
      `,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Roboto",
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont("https://jemartel.dev/fonts/aria-violet.ttf"),
            weight: 400,
            style: "normal",
          },
        ],
      },
    ),
  );
};
