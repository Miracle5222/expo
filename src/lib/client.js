import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "s6ue8uf3",
  dataset: "production",
  apiVersion: "2022-09-04",
  useCdn: true,
  token: process.env.TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
