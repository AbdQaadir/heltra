import { createClient } from "@/utils/supabase-client";
import React from "react";

function Page(props: any) {
  const supabase = createClient();

  return <div>Dashboard</div>;
}

export default Page;
