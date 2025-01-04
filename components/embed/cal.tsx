"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import { DATA } from "@/data/resume";

export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div
      data-cal-namespace="15min"
      data-cal-link="pramudya-diagusta-dbmbkp/15min"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
      className="h-[13rem] w-[25rem] border-2 dark:border-zinc-800 border-zinc-100 bg-zinc-50 dark:bg-zinc-900 rounded-lg cursor-pointer -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 p-5 relative"
    >
      <div className="absolute">
        <h1 className="font-semibold text-lg tracking-tight">
          Have any ideas?
        </h1>
        <p className="text-sm">Let's make it real.</p>
      </div>
      <div className="p-1.5 bg-white w-20 h-24 overflow-hidden border dark:border-white absolute right-4 rotate-3">
        <Image
          src="/face.jpg"
          alt="face"
          width={100}
          height={100}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-4">
        <h1 className="text-sm font-semibold capitalize">{DATA.name}</h1>
        <p className="text-xs text-zinc-500">{DATA.email}</p>
      </div>
    </div>
  );
}
