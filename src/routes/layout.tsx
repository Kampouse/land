import { component$, Slot, useStyles$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, } from "@builder.io/qwik-city";
import { isServer } from '@builder.io/qwik/build';
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import post from "posthog-js"
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  //eslint-disable-next-line
  useVisibleTask$(() => {
    if (document.location.host.includes("jemartel.dev")) {
      post.init(
        'phc_O45dLj5YhxXeIEbjmqi8sw6p2ooKUosN02i2mgXTlVf',
        {
          api_host: "https://us.i.posthog.com",
          capture_heatmaps: true,
          capture_pageview: true,
          capture_pageleave: true,
          person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
          capture_performance: true,
          disable_external_dependency_loading: false, // Optional - will ensure we never try to load extensions lazily

        }
      )
    }
  });
  useStyles$(styles);
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
