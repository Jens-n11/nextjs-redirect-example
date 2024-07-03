import { redirect } from "next/navigation";

export type SearchParams = { [key: string]: string | string[] | undefined };
export default function Redirection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  console.log(searchParams);
  if (searchParams.test === "true") {
    redirect("/landing-page");
  }

  return <div>This is the redirection page</div>;
}
