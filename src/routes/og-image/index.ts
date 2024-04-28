import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchFont, ImageResponse, html } from "og-img";

export const onGet: RequestHandler = async ({ send }) => {
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
            data: await fetchFont("https://jemartel.dev/fonts/aria-violet.ttf"),
            weight: 400,
            style: "normal",
          },
        ],
      },
    ),
  );
};
