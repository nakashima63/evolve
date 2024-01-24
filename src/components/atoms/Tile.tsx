export const Tile = () => {
  return (
    <div className="w-full max-w-[260px] h-[180px] mx-auto px-4">
      <div className=" border border-green-600 border-solid rounded-md shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300 p-2 text-xs">
        <div className="mt-2">
          <p className="mb-2">株式会社サンプルテクノロジー</p>
          <p className="mb-2">一次面接</p>
          <p className="mb-2">東京都</p>
          <p className="mb-2">年収400万円~1000万円</p>
          <p>エージェント</p>
        </div>
      </div>
    </div>
  );
};
