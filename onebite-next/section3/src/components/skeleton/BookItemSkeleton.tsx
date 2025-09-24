export default function BookItemSkeleton() {
  return (
    <div className="flex gap-4 py-5 px-2.5 border-b border-solid border-gray-200">
      <div className="w-20 h-28 bg-gray-300"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200"></div>
        <div className="h-4 bg-gray-200"></div>
        <br />
        <div className="h-4 bg-gray-200"></div>
      </div>
    </div>
  );
}
