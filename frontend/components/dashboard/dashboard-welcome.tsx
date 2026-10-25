import React from "react";
import { GitPullRequest, Code } from "lucide-react";

interface DashboardWelcomeProps {
  hasContributions: boolean;
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-8 px-4">
      <div className="h-16 w-16 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
        <Code className="w-8 h-8 text-emerald-400" />
      </div>

      <div className="text-center space-y-4 max-w-xl">
        <h2 className="text-2xl font-bold text-white">Welcome to Hakediş</h2>
        <p className="text-zinc-400 text-lg">
          Youre ready to start earning rewards for your open source
          contributions. Find projects using Hakediş to begin your journey.
        </p>

        <div className="grid grid-cols-1  gap-4 mt-6">
          <a
            href="https://github.com/topics/good-first-issue"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-emerald-400 hover:text-emerald-300 rounded-lg border border-zinc-800 px-4 py-3"
          >
            <GitPullRequest className="w-5 h-5" />
            <span>Find Projects</span>
          </a>
        </div>

        <div className="mt-8 bg-[#1B1B1D] bg-opacity-90 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-4">Getting Started</h3>
          <ul className="text-left text-zinc-400 space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-bold text-sm">
                1
              </div>
              <span>
                Browse repositories that use Hakediş for contributor rewards
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-bold text-sm">
                2
              </div>
              <span>
                Submit pull requests to these projects focusing on labeled
                issues
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-bold text-sm">
                3
              </div>
              <span>Once your PR is merged, verify it through Hakediş</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-bold text-sm">
                4
              </div>
              <span>
                Receive your rewards automatically based on the PR labels
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;
