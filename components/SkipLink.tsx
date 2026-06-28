"use client";
export default function SkipLink() {
  return (
    <>
      <style>{`.skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;z-index:9999;background:#22C55E;color:#000;padding:12px 20px;font-weight:700;font-size:14px;text-decoration:none;font-family:var(--font-inter)}.skip-link:focus{position:fixed;top:0;left:0;width:auto;height:auto;overflow:visible}`}</style>
      <a href="#main-content" className="skip-link">Skip to main content</a>
    </>
  );
}
