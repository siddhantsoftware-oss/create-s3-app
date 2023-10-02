import { useQuery } from "react-query";
import { apiServerUrl } from "../_main";

function Index() {
  const { data, isLoading } = useQuery("hello", async () =>
    fetch(`${apiServerUrl}/hello/world`, {
      headers: { Accept: "application/json" },
    }).then((res) => res.text())
  );

  return (
    <div className="w-[800px] flex justify-center place-items-center h-screen mx-auto text-center">
      <div className="flex flex-col gap-y-3">
        <div className="text-6xl font-bold">Create S3 App</div>
        <div className="text-2xl">{isLoading ? "Loading..." : data}</div>
        <div className="text-xl font-semibold">
          React JS • TypeScript • TanStack Query • GoLang • TailwindCSS
        </div>
      </div>
    </div>
  );
}

export default Index;
