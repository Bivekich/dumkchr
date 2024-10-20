// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "1bzvo87v",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-10-17", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export default async function getSchedule() {
  const schedule = await client
    .fetch('*[_type == "schedule"][0]{Month[]{Date,List[]{Title,Time}}}')
    .then((schedule) => {
      return schedule.Month;
    });
  return schedule;
}
export async function getNews() {
  const News = await client
    .fetch(
      '*[_type == "news"][0]{Items[]{Title,Date,Image{asset->{url}},MainText[]{children[]}}}'
    )
    .then((item) => {
      return item.Items;
    });
  return News;
}
export async function getPhotos() {
  const Photos = await client
    .fetch('*[_type == "photo"][0]{Photos[]{asset->{url}}}')
    .then((item) => {
      return item.Photos;
    });
  return Photos;
}
export async function getVideo() {
  const Photos = await client
    .fetch('*[_type == "video"][0]{video[]{asset->{url}}}')
    .then((item) => {
      return item.Video;
    });
  return Photos;
}
export async function getLeaders() {
  const Leaders = await client
    .fetch(
      '*[_type == "Leader"][0]{Leaders[]{Image{asset->{url}}, Name, LeaderOf, Description}}'
    )
    .then((leader) => {
      return leader.Leaders;
    });
  return Leaders;
}
export async function getDecree() {
  const Decree = await client
    .fetch(
      '*[_type == "decree"][0]{Array[]{"url": asset->url, "fileName": asset->originalFilename}}'
    )
    .then((item) => {
      return item.Array;
    });

  return Decree;
}
