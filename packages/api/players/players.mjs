import { fetchPlayer } from "./index.mjs";
import { addPlayer } from "./index.mjs";

export async function main(args) {
  let { method } = args.http;
  console.log('method', method);
  if (method === 'GET') {
    return fetchPlayer(args);
  }
  if (method === 'POST') {
    return addPlayer(args);
  }
  return { body: "No matching endpoint found" };
}