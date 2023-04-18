import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black pt-1 absolute bottom-0 left-0 right-0">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <p className="mb-b text-sm text-primary-2 font-bold">
              &copy; {new Date().getFullYear()}
              <Link href="https://github.com/priti921">
                {` `} Github/Priti921
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
