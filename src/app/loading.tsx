export default function Loading() {
  return (
    <div className="animate-pulse max-w-4xl mx-auto p-4 space-y-6">
      {/* Header skeleton */}
      <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
      
      {/* Author/date skeleton */}
      <div className="flex gap-4">
        <div className="h-4 bg-gray-200 rounded-md w-24"></div>
        <div className="h-4 bg-gray-200 rounded-md w-32"></div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded-md"></div>
        <div className="h-4 bg-gray-200 rounded-md"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
      </div>

      {/* Image placeholder */}
      <div className="h-64 bg-gray-200 rounded-md"></div>

      {/* More content skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded-md"></div>
        <div className="h-4 bg-gray-200 rounded-md w-11/12"></div>
        <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
      </div>
    </div>
  );
}
