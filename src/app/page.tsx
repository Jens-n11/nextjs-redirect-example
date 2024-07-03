import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "lightgray", height: "100%" }}>
      <p>Main Page</p>
      <p>
        <a href={"/redirection?test=true"}>A-Tag with redirect</a>
      </p>
      <p>
        <a href={"/redirection"}>A-Tag without redirect</a>
      </p>
      <p>
        <Link href={"/redirection?test=true"}>Next-Link with redirect</Link>
      </p>
      <p>
        <Link href={"/redirection"}>Next-Link without redirect</Link>
      </p>
    </div>
  );
}
