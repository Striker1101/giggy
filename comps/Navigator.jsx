import { useRouter } from "next/router";
import React from "react";
import DottedHR from "./DottedHR";
export default function Navigation() {
  const router = useRouter();
  const { pathname } = router;

  const handleClick = (subroute) => {
    router.push(subroute);
  };

  const renderBreadcrumb = (route) => {
    return <button onClick={() => handleClick(route)}>{route}</button>;
  };

  const routes = pathname.split("/").filter((route) => route !== "");

  return (
    <div style={{ margin: " 0 10px" }}>
      <p>you are here: /{routes.join("/")}</p>
      {routes.map((route, index) => {
        const isLast = index === routes.length - 1;
        return (
          <React.Fragment key={route}>
            {renderBreadcrumb(route)}
            {!isLast && <span> / </span>}
          </React.Fragment>
        );
      })}
      <DottedHR />
    </div>
  );
}
