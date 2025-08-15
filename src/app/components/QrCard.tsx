import { QrCode } from "lucide-react";

export default function QrCard({ profileUrl }: { profileUrl: string }) {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
    profileUrl
  )}`;

  return (
    <div className="bg-white/5 border border-orange-500/40 rounded-2xl p-5 text-white backdrop-blur-sm w-fit">
      <div className="flex items-center gap-3 text-orange-400 mb-3">
        <QrCode className="w-6 h-6" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wide">Acceso rápido</span>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qrSrc}
        alt="QR: acceso al portafolio"
        width={160}
        height={160}
        className="block bg-white rounded-xl p-3"
      />

      <p className="mt-3 text-xs text-white/80 break-all">{profileUrl}</p>
    </div>
  );
}
