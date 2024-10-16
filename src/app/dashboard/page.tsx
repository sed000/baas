"use server";

import APITable from "./table";
import CreateForm from "./create";

export default async function Dashboard() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          <CreateForm />
          <APITable />
        </div>
      </main>
    </div>
  );
}