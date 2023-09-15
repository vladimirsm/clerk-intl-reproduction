"use client";
import { useOrganization } from "@clerk/nextjs";

export default function Organization() {
  const { organization } = useOrganization();

  return <span>{organization?.id}</span>;
}
