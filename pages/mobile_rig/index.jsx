import React, { useEffect } from "react";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/rig/mobile_rig_for_sale");
  }, [router]);

  return <div></div>;
}

export default Index;
