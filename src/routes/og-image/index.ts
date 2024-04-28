import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchFont, ImageResponse, html } from "og-img";

export const onGet: RequestHandler = async (req) => {
  req.send(
    new ImageResponse(
      html`
        <div tw="text-4xl  " style="background-color: red">
          jemartel / porfolio
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
