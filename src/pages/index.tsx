import { useQuery } from "react-query";
import { apiServerUrl } from "../_main";
import { signIn, signOut } from "../sdk/auth";

function Index() {
  const { data, isLoading, isError } = useQuery("hello", async () =>
    fetch(`${apiServerUrl}/hello/world`, {
      headers: { Accept: "application/json" },
      credentials: "include",
      method: "GET",
    }).then(async (res) => {
      const data = await res.text();
      return {
        data: res.status === 200 ? data : JSON.parse(data),
        status: res.status,
      };
    })
  );

  return (
    <div className="w-[800px] flex justify-center place-items-center h-screen mx-auto text-center">
      <div className="flex flex-col gap-y-3">
        <div className="text-6xl font-bold">Create S3 App</div>
        <div className="text-2xl">
          {isLoading
            ? "Loading..."
            : data?.status === 200
            ? data.data
            : "Hello, " + JSON.parse(data?.data).email + "!"}{" "}
          {isError ? "There was an error" : null}
        </div>
        <div className="text-xl font-semibold">
          React JS • TypeScript • TanStack Query • GoLang • TailwindCSS
        </div>
        <div className="mt-3">
          {isLoading || !data ? (
            <div className="mt-3">
              <div className="bg-red-600 invisible text-white px-3 py-2 rounded-md font-semibold shadow-2xl hover:shadow-xl transition">
                Sign Out
              </div>
            </div>
          ) : data.status == 200 ? (
            <div className="mt-3">
              <button
                onClick={() => signIn("google")}
                className="bg-white px-3 py-2 rounded-md font-semibold shadow-2xl hover:shadow-xl transition"
              >
                Login with Google
              </button>
            </div>
          ) : (
            <div className="mt-3">
              <button
                onClick={signOut}
                className="bg-red-600 text-white px-3 py-2 rounded-md font-semibold shadow-2xl hover:shadow-xl transition"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
