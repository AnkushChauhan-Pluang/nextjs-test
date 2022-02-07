import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
      <nav className="flex justify-around py-4 border-b">
        <Link href="/">
          <a className="px-4 py-2 border rounded">Users</a>
        </Link>
        <Link href="/movies">
          <a className="px-4 py-2 border rounded">Movies</a>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
