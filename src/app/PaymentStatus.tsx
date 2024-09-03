import { fetchPost } from "@/lib/axios/action";
import { getPaymentStatusByUrl } from "@/lib/supabase/action";
import { ReactNode } from "react";
import Lock from "./lock";

export default async function PaymentStatus({
  children,
}: {
  children: ReactNode;
}) {
  const data = await getPaymentStatusByUrl();

  if (data?.status_pay) {
    return <>{children}</>;
  }
  return <Lock />;
}
