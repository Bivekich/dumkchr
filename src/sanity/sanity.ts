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
      '*[_type == "news"][0]{Items[]{Title,Date,Image{asset->{url}},MainText, isMain, Other[]{asset->{url}}, preview{asset->{url}}}}'
    )
    .then((item) => {
      return item.Items;
    });
  return News;
}
export async function getPhotos() {
  const Photos = await client
    .fetch(
      '*[_type == "photo"][0]{Photos[]{"url":asset->url, "fileName": asset->originalFilename}}'
    )
    .then((item) => {
      return item.Photos;
    });
  return Photos;
}
export async function getVideo() {
  const Photos = await client
    .fetch(
      '*[_type == "video"][0]{Videos[]{"url":asset->url, "fileName": asset->originalFilename}}'
    )
    .then((item) => {
      return item.Videos;
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
    .fetch('*[_type == "decree"][0]{Array[]{DecreeName, Decree{asset->{url}}}}')
    .then((item) => {
      return item.Array;
    });

  return Decree;
}
export async function getHadis() {
  const Hadis = await client.fetch('*[_type == "Hadis"]{text}');
  return Hadis;
}
export async function getDocuments() {
  const Documents = await client
    .fetch(
      '*[_type == "documents"][0]{Array[]{DecreeName, Decree{asset->{url}}}}'
    )
    .then((item) => {
      return item.Array;
    });

  return Documents;
}
export async function getAppeals() {
  const Documents = await client
    .fetch('*[_type == "appeal"][0]{Array[]{AppealName, Appeal{asset->{url}}}}')
    .then((item) => {
      return item.Array;
    });

  return Documents;
}
export async function getSections() {
  const Sections = await client
    .fetch(
      '*[_type == "Sections"][0]{Array[]{"image":image{asset->{url}}, "info":info, "sectionType":sectionType, "Other":Other[]{asset->{url}}}}'
    )
    .then((item) => {
      return item.Array;
    });
  return Sections;
}
export async function getRegions() {
  const Sections = await client
    .fetch(
      '*[_type == "Regions"][0]{Array[]{"name": RegionName, "image":image{asset->{url}}, "info":info, Other[]{asset->{url}}}}'
    )
    .then((item) => {
      return item.Array;
    });
  return Sections;
}
export async function getContacts() {
  const Contacts = await client
    .fetch('*[_type == "Contacts"][0]{info}')
    .then((item) => {
      return item;
    });
  return Contacts;
}
export async function getFooter() {
  const Contacts = await client
    .fetch('*[_type == "Footer"][0]{mediaArray[]}')
    .then((item) => {
      return item;
    });
  return Contacts;
}
export async function getAccounting() {
  const Accounting = await client
    .fetch(
      '*[_type == "Accountings"][0]{Array[]{"doc":doc{asset->{url}}, "text": text}}'
    )
    .then((item) => {
      return item;
    });
  return Accounting;
}
export async function getFeedBack() {
  const FeedBack = await client
    .fetch('*[_type == "FeedBack"]{mainText, request1, request2, request3}')
    .then((item) => {
      return item[0];
    });
  return FeedBack;
}
