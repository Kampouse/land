import type { RequestHandler } from "@builder.io/qwik-city";
import type { PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";
import { fetchFont, ImageResponse, html } from "og-img";
export const onGet: RequestHandler<PlatformCloudflarePages> = async ({
  send,
  url,
}) => {
  console.log(url);

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
            data: await fetchFont(`${url.origin}/fonts/aria-violet.ttf`),
            weight: 400,
            style: "normal",
          },
        ],
      },
    ),
  );
};
