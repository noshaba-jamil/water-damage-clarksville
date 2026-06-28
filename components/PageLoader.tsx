"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const startLoad = useCallback(() => {
    setLoading(true);
    setVisible(true);
    setProgress(10);
    const t1 = setTimeout(() => setProgress(40), 100);
    const t2 = setTimeout(() => setProgress(65), 300);
    const t3 = setTimeout(() => setProgress(80), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const endLoad = useCallback(() => {
    setProgress(100);
    const t = setTimeout(() => {
      setLoading(false);
      setTimeout(() => { setVisible(false); setProgress(0); }, 300);
    }, 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cleanup = startLoad();
    const done = setTimeout(endLoad, 100);
    return () => { cleanup(); clearTimeout(done); };
  }, [pathname, searchParams, startLoad, endLoad]);

  // Also intercept link clicks for instant feedback
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || target.target === "_blank") return;
      if (href.startsWith("http") && !href.includes("localhost")) return;
      startLoad();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [startLoad]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .page-loader-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 9999;
          pointer-events: none;
        }
        .page-loader-fill {
          height: 100%;
          background: linear-gradient(90deg, #22C55E, #4ADE80, #22C55E);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite linear;
          transition: width 0.3s ease, opacity 0.3s ease;
          box-shadow: 0 0 10px rgba(34,197,94,0.6), 0 0 20px rgba(34,197,94,0.3);
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .page-loader-spinner {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 36px;
          height: 36px;
          background: rgba(9,9,11,0.9);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          pointer-events: none;
          backdrop-filter: blur(8px);
          animation: fadeInSpinner 0.2s ease;
        }
        @keyframes fadeInSpinner {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .page-loader-ring {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(34,197,94,0.2);
          border-top-color: #22C55E;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      {/* Top progress bar */}
      <div className="page-loader-bar">
        <div
          className="page-loader-fill"
          style={{
            width: `${progress}%`,
            opacity: loading ? 1 : 0,
          }}
        />
      </div>
      {/* Bottom-right spinner */}
      {loading && (
        <div className="page-loader-spinner">
          <div className="page-loader-ring" />
        </div>
      )}
    </>
  );
}
