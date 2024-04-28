import type { RequestHandler } from "@builder.io/qwik-city";
import { ImageResponse, fetchFont, html } from "og-img";
export const onGet: RequestHandler = async ({ send, url }) => {
  let font = null;
  try {
    font = await fetchFont(`${url.origin}/fonts/aria-violet.ttf`);
  } catch (e) {
    console.error(e);
    send(new Response("Failed to fetch font", { status: 500 }));
    return;
  }

  send(
    new ImageResponse(
      html`
        <div tw="text-4xl text-green-700" style="background-color: tan">
          Hello, world!
        </div>
      `,
      {
        width: 300,
        height: 300,
        fonts: [
          {
            name: "Roboto",
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: font,
            weight: 400,
            style: "normal",
          },
        ],
      },
    ),
  );
};
