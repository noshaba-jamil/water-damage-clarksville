"use client";

import Link from "next/link";

export default function PostActions({ postId, slug, published }: { postId: string; slug: string; published: boolean }) {
  return (
    <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
      {published && (
        <Link href={`/blog/${slug}`} target="_blank" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"10px 20px",borderRadius:6,fontSize:13,fontWeight:700,textDecoration:"none",background:"#22C55E",color:"#09090B"}}>
          🌐 View Live ↗
        </Link>
      )}
      <button
        style={{display:"inline-flex",alignItems:"center",gap:7,padding:"10px 20px",borderRadius:6,fontSize:13,fontWeight:700,background:"rgba(96,165,250,.15)",color:"#60A5FA",border:"1px solid rgba(96,165,250,.2)",cursor:"pointer"}}
        onClick={async () => {
          await fetch(`/api/blog/posts/${postId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ published: !published }),
          });
          window.location.reload();
        }}
      >
        {published ? "📥 Unpublish" : "🚀 Publish Now"}
      </button>
      <button
        style={{display:"inline-flex",alignItems:"center",gap:7,padding:"10px 20px",borderRadius:6,fontSize:13,fontWeight:700,background:"rgba(252,165,165,.1)",color:"#FCA5A5",border:"1px solid rgba(252,165,165,.15)",cursor:"pointer"}}
        onClick={async () => {
          if (confirm("Delete this post permanently?")) {
            await fetch(`/api/blog/posts/${postId}`, { method: "DELETE" });
            window.location.href = "/admin/blog";
          }
        }}
      >
        🗑️ Delete
      </button>
    </div>
  );
}
