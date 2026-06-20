export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 animate-tick rounded-full bg-brass" />
        <span className="h-1.5 w-1.5 animate-tick rounded-full bg-brass [animation-delay:0.2s]" />
        <span className="h-1.5 w-1.5 animate-tick rounded-full bg-brass [animation-delay:0.4s]" />
      </div>
    </div>
  );
}
