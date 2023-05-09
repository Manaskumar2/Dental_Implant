import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "vbak6aku",
    dataset: "production",
    apiVersion: "2023-04-03",
    useCdn: true,
});