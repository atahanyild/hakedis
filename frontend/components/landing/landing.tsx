"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import {
  ArrowRight,
  BookOpen,
  Check,
  Coins,
  FileCheck2,
  GitMerge,
  GitPullRequest,
  GraduationCap,
  KeyRound,
  Lock,
  ShieldCheck,
  Tags,
  UserCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4 },
};

const pipeline = [
  { label: "GitHub account linked", detail: "commit / reveal" },
  { label: "Pull request fetched over TLS", detail: "api.github.com" },
  { label: "zkTLS proof generated", detail: "Reclaim Protocol" },
  { label: "Proof verified on-chain", detail: "Neutron" },
];

const audiences = {
  developers: {
    label: "For Developers",
    steps: [
      {
        icon: <GitPullRequest className="w-5 h-5" />,
        title: "Contribute",
        text: "Open pull requests to repositories registered on Hakediş.",
      },
      {
        icon: <FileCheck2 className="w-5 h-5" />,
        title: "Prove",
        text: "Generate a zkTLS proof that your PR was merged, straight from GitHub's API.",
      },
      {
        icon: <Coins className="w-5 h-5" />,
        title: "Get rewarded",
        text: "The contract verifies the proof and releases tokens or NFTs to your wallet.",
      },
    ],
  },
  owners: {
    label: "For Project Owners",
    steps: [
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Register a repository",
        text: "Prove admin rights on the repo with a zkTLS proof, no manual review needed.",
      },
      {
        icon: <Tags className="w-5 h-5" />,
        title: "Map labels to rewards",
        text: "Attach token or NFT rewards to the labels you already use on pull requests.",
      },
      {
        icon: <GitMerge className="w-5 h-5" />,
        title: "Merge as usual",
        text: "Contributors claim their own rewards. No spreadsheets, no invoices.",
      },
    ],
  },
};

type Audience = keyof typeof audiences;

const proofs = [
  {
    icon: <UserCheck className="w-5 h-5" />,
    endpoint: "/user",
    title: "Identity",
    text: "Links a GitHub account to a wallet. A commit/reveal scheme keeps the proof from being frontrun.",
  },
  {
    icon: <GitPullRequest className="w-5 h-5" />,
    endpoint: "/repos/{owner}/{repo}/pulls/{n}",
    title: "Pull request",
    text: "Shows the PR exists, is merged and carries the labels that define the reward.",
  },
  {
    icon: <KeyRound className="w-5 h-5" />,
    endpoint: "/repos/{owner}/{repo}",
    title: "Repository admin",
    text: "Confirms the registering user holds admin permission on the repository.",
  },
];

export function Landing() {
  const [audience, setAudience] = useState<Audience>("developers");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectGithub = () => {
    setIsConnecting(true);
    signIn("github");
  };

  return (
    <div className="flex flex-col">
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              YTÜ Computer Engineering &middot; Ara Proje
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              Open source work,
              <br />
              <span className="text-emerald-400">verifiably rewarded.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
              Hakediş lets project owners attach rewards to pull request labels. Contributors prove
              their merged PRs with zkTLS and claim tokens or NFTs on-chain, with no middleman
              deciding who gets paid.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={connectGithub}
                disabled={isConnecting}
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300 transition-colors disabled:opacity-70"
              >
                <FaGithub className="w-4 h-4" />
                {isConnecting ? "Connecting..." : "Connect GitHub"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="https://github.com/atahanyild/hakedis/tree/main/docs/src"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read the docs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative rounded-xl border border-zinc-800 bg-[#0A0A0A]/90 shadow-2xl shadow-emerald-500/5 overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 font-mono text-xs text-zinc-500">claim-reward</span>
            </div>

            <div className="p-5 sm:p-6 font-mono text-sm">
              <p className="text-zinc-500">
                <span className="text-emerald-400">$</span> hakedis claim atahanyild/hakedis#42
              </p>

              <ul className="mt-5 space-y-3">
                {pipeline.map((step, i) => (
                  <motion.li
                    key={step.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.25 }}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="flex items-center gap-2.5 text-zinc-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {step.label}
                    </span>
                    <span className="hidden sm:inline text-xs text-zinc-600">{step.detail}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 + pipeline.length * 0.25 }}
                className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>label: enhancement</span>
                  <span>reward released</span>
                </div>
                <p className="mt-1 text-lg text-emerald-400">+150 HAK</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/60">
        <motion.div
          {...fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-sm font-medium text-emerald-400">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Three steps on either side
            </h2>
          </div>

          <div className="flex gap-1 p-1 rounded-lg border border-zinc-800 bg-zinc-900/60 self-start md:self-auto">
            {(Object.keys(audiences) as Audience[]).map((key) => (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  audience === key
                    ? "bg-zinc-800 text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {audiences[key].label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.ol
          key={audience}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {audiences[audience].steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-zinc-800 bg-[#0A0A0A]/80 p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400">
                  {step.icon}
                </span>
                <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </motion.ol>
      </section>

      <section className="py-20 border-t border-zinc-800/60">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-400">Under the hood</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            GitHub data a smart contract can trust
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            zkTLS produces a cryptographic proof that an HTTPS response really came from GitHub and
            was not altered. Hakediş uses three such proofs, each backed by a GitHub REST endpoint.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-zinc-800 bg-[#0A0A0A]/80 p-6"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 text-zinc-300 ring-1 ring-zinc-800">
                {proof.icon}
              </span>
              <h3 className="mt-5 text-lg font-medium text-white">{proof.title}</h3>
              <code className="mt-2 block truncate font-mono text-xs text-emerald-400/80">
                GET {proof.endpoint}
              </code>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{proof.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-4 flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
        >
          <Lock className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Identity proofs are submitted in two transactions: a hash of a client-side secret is
            committed first, then revealed together with the proof. Only one commitment can exist
            per key, so a proof seen in the mempool cannot be replayed by someone else.
          </p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-zinc-800/60">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0A0A0A]/90 p-8 md:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <GraduationCap className="w-7 h-7" />
            </span>

            <div>
              <p className="text-sm font-medium text-emerald-400">About the project</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Built at Yildiz Technical University
              </h2>
              <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                Hakediş is developed as an intermediate project (Ara Proje) in the Department of
                Computer Engineering at Yildiz Technical University, Istanbul. The project explores
                how zkTLS can bring verifiable Web2 data, in this case GitHub activity, into smart
                contracts to automate open source funding.
              </p>
              <p className="mt-4 max-w-3xl text-sm text-zinc-500 leading-relaxed">
                Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü ara projesi kapsamında
                geliştirilmiştir.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["zkTLS", "Reclaim Protocol", "CosmWasm", "Neutron", "Next.js"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
