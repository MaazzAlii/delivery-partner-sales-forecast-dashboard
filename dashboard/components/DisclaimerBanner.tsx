import { AlertTriangle } from "lucide-react";

interface DisclaimerBannerProps {
  text?: string;
}

export default function DisclaimerBanner({ text }: DisclaimerBannerProps) {
  const defaultText =
    "SYNTHETIC DATA — Independent student project analyzing a hypothetical delivery-partner business for SafeX Solutions Internship (Week 4, Group 56). Not affiliated with or endorsed by Careem.";

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3 text-amber-300 text-sm">
      <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
      <div>
        <h4 className="font-semibold text-amber-200">Educational Case Study Disclaimer</h4>
        <p className="text-xs text-amber-300/90 mt-0.5">{text || defaultText}</p>
      </div>
    </div>
  );
}
