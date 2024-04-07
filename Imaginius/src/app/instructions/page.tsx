"use client";

import Link from "next/link";

export default function Instructions() {
  return (
    <main className="flex min-h-screen flex-col items-center text-white bg-black">
      <h3 className="mt-10 mb-6 p-1 text-center font-semibold text-3xl">
        How to become an imaginius?
      </h3>
      <ol className="text-xl list-decimal">
        <li> Write a prompt </li>
        <li> Draw your scribble </li>
        <li> Submit and enjoy your art. </li>
      </ol>

      <Link href="/">
        <p className="bg-white hover:bg-grey text-black font-bold py-2 px-6 rounded mt-6">
          Start now!
        </p>
      </Link>

      <p className="flex p-10">
        Visit the&nbsp;
        <Link className="text-blue-500 underline text-sm" href="/gallery">
          gallery
        </Link>
        &nbsp;to view all the past artworks.
      </p>

      
    </main>
  );
}
