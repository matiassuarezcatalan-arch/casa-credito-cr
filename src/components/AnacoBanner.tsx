export function AnacoLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 5L5 50h12l13-25 13 25h12L30 5z" fill="#7B8794" opacity="0.6"/>
      <path d="M30 15L12 50h10l8-18 8 18h10L30 15z" fill="#5A6A7A" opacity="0.8"/>
      <path d="M15 42h30" stroke="#7B8794" strokeWidth="3"/>
      <path d="M18 48h24" stroke="#7B8794" strokeWidth="3"/>
    </svg>
  );
}

export function AnacoLogoFull() {
  return (
    <div className="flex items-center gap-2">
      <AnacoLogo />
    </div>
  );
}
