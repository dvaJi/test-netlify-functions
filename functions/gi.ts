import { Config, Context } from "@netlify/functions";
import GenshinData from "genshin-data";

const giData = new GenshinData();

export default async (req: Request, context: Context) => {
  const name = new URL(req.url).searchParams.get("name") ?? "Stranger";
  const characters = await giData.characters();

  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
      characters: characters,
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    }
  );
};

export const config: Config = {
  method: "POST",
  path: "/form-submission",
};
