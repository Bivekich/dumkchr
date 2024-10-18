// sanity.js
import {createClient} from '@sanity/client'
import News from './schems/News'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: '1bzvo87v',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-10-17', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export default async function getSchedule() {
  const schedule = await client
    .fetch('*[_type == "schedule"][0]{Month[]{Date,List[]{Title,Time}}}')
    .then((schedule) => {
      return schedule.Month
    })
  return schedule
}
export async function getNews() {
  const News = await client
    .fetch('*[_type == "news"][0]{Items[]{Title,Date,Image{asset->{url}},MainText[]{children[]}}}')
    .then((item) => {
      return item.Items
    })
  return News
}
