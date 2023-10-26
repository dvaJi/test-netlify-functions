import { Config, Context } from "@netlify/functions";
import GenshinData from "genshin-data";

const giData = new GenshinData();

export default async (req: Request, context: Context) => {
  const name = new URL(req.url).searchParams.get("name") ?? "Stranger";
  const characters = await giData.characters();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
      characters: characters,
    }),
  };
};

export const config: Config = {
  method: "POST",
  path: "/form-submission",
};
