import { HakedisQueryClient } from "@/ts/hakedis/Hakedis.client";
import { NullableCommitmentForAddr } from "@/ts/hakedis/Hakedis.types";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export async function checkIfGithubLinked({
  githubUserId,
  rpcUrl,
  contractAddress,
}: {
  githubUserId: number;
  rpcUrl: string;
  contractAddress: string;
}): Promise<NullableCommitmentForAddr | string | null> {
  if (!githubUserId) return null;

  const client = await CosmWasmClient.connect(rpcUrl);
  const hakedisQueryClient = new HakedisQueryClient(client, contractAddress);

  const LinkedResult = await hakedisQueryClient.linkedAddress({ githubUserId });

  if (typeof LinkedResult === "string" && LinkedResult.length > 0) {
    return LinkedResult;
  }

  const CommitedResult = await hakedisQueryClient.userCommitment({
    githubUserId,
  });

  if (CommitedResult === null) {
    return null;
  }

  return CommitedResult;
}
