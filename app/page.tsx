import Title from "@/components/Title";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <Title title={"Mvlst"} subtitle={"Simple movie tracker"} />

      <section className="mb-8">
        <p>
          Simple app to keep track of the movies you're viewing. No ads, no
          social, all really simple and useful.
        </p>
      </section>

      <Link
        className="underline decoration-1 underline-offset-[2.5px] decoration-[#505050] transition-colors  hover:text-secondary"
        href="/login"
      >
        Login
      </Link>
    </>
  );
}
