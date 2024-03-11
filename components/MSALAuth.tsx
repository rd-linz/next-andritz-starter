import dynamic from "next/dynamic";

export const DynamicMSAL = dynamic(() => import('@andritz/hwf2').then(mod => mod.MSALAuth), { ssr: false });