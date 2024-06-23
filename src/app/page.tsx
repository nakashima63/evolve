import { redirect } from "next/navigation";

const validateAuth = async (): Promise<boolean> => {
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/validate`;
  const res = await fetch(endpoint, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });

  if (res.status !== 200) {
    return false;
  }
  return true;
};

const Home = async () => {
  const isAuth = await validateAuth();

  if (isAuth) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ようこそ、evolveへ
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          転職活動を効率的に管理するためのサービスです。
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            ログイン
          </a>
          <a
            href="/register"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            ユーザ登録
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
