"use client";

import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import BreadCrumbItem from "./breadcrumb-item";

const BreadCrumb = () => {
  const pathname = usePathname();
  const breadCrumbItems = pathname.split("/").slice(1);
  let breadCrumbPath = "/";

  return (
    <div className="flex items-center flex-wrap gap-1">
      <BreadCrumbItem text="home" icon={<Home size={12} />} link={"/"} />
      {breadCrumbItems.map((pathname, index) => {
        breadCrumbPath += `${pathname}/`;
        return (
          <Fragment key={pathname}>
            <ChevronRight size={14} />
            <BreadCrumbItem
              text={pathname}
              link={index === breadCrumbItems.length - 1 ? "" : breadCrumbPath}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
