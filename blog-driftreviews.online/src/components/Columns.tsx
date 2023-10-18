import type { ColumnDef } from "@tanstack/react-table";
import type { Mouse } from "src/api/prismic";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Mouse>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "mouse_name_short",
    header: "Mouse Name",
  },
  {
    accessorKey: "short_description",
    header: "Short Description",
  },
];
