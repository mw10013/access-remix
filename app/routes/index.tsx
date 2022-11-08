import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createServerClient } from "@supabase/auth-helpers-remix";

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response();
  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  return json(
    { dt: new Date(), data },
    {
      headers: response.headers,
    }
  );
};

export default function Index() {
  const loaderData = useLoaderData();
  return (
    <div className="min-h-full mx-auto max-w-sm p-8">
      <h1 className="text-gray-500 text-center">Welcome to Access</h1>
      <div className="flex justify-between mt-3">
        <Link to="login">Login</Link>
        <Link to="logout">Logout</Link>
      </div>
      <pre className="mt-3">{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
