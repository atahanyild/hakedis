interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => (
  <span className={`inline-flex items-baseline font-semibold tracking-tight text-zinc-100 ${className}`}>
    hakediş
    <span className="text-emerald-400">_</span>
  </span>
);

export default Logo;
