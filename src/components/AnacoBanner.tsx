import logo from "../assets/ANACO_Logo.png";

export function AnacoLogo({ className = "h-10 w-10" }: { className?: string }) {
  return <img src={logo} alt="Anaco logo" className={className} />;
}

export function AnacoLogoFull() {
  return (
    <div className="flex items-center gap-2">
      <AnacoLogo />
    </div>
  );
}