import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { ArrayOfRepo } from "@/ts/hakedis/Hakedis.types";
import { HakedisQueryClient } from "@/ts/hakedis/Hakedis.client";

export async function filteredRepos(rpcUrl: string, contractAddress: string): Promise<ArrayOfRepo> {
  const client = await CosmWasmClient.connect(rpcUrl);

  const repos = await new HakedisQueryClient(client, contractAddress).repos();
  return repos;
}
