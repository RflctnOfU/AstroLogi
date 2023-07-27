import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center border border-white m-2 gap-4 px-4 rounded-xl">
      <div className="mx-2">
        <Link href={"/"}>About</Link>
      </div>
      <div className="mx-2">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="mx-2">
        <Link href={"/"}>GitHub</Link>
      </div>
    </div>
  );
}
