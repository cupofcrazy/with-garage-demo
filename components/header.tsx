import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center border-b h-[72px] border-gray-200 p-4 fixed top-0 left-0 right-0 z-[9999] bg-white justify-between gap-4">
      <Link href="/" aria-label="Home">
        <Image src={"/images/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <div className="w-full">
        <div className="w-full">
          <form className="relative outline outline-1 outline-neutral-200 focus-within:outline-neutral-300 w-full rounded-2xl overflow-hidden">
            <input
              placeholder="Search"
              className="w-full flex-shrink px-4 py-2.5 leading-5 placeholder-neutral-500 placeholder:tracking-wide placeholder:font-light outline-none focus:ring-0 border-none"
              type="text"
            />
            <button
              type="submit"
              className="absolute py-2.5 right-0 pr-4 text-neutral-500 shrink-0 hover:text-neutral-900 bg-white pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 stroke-1.5 text-neutral-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 shrink-0">
        <button className="shrink-0 relative">
          <p className="text-base/normal font-medium text-black undefined">
            Browse <span className="hidden md:inline-block">listings</span>
          </p>
        </button>
        <button
          className="relative"
          id="headlessui-menu-button-:r1:"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          data-headlessui-state=""
        >
          <UserCircleIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="flex md:hidden items-center space-x-4">
        <div className="relative flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
