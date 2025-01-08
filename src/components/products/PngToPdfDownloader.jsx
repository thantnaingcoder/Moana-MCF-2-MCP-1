"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { LuArrowRight } from "react-icons/lu";

export default function PngToPdfDownloader({  imageName, imageIdName }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    console.log("test");
    const element = document.getElementById(imageIdName);
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: `${imageName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <div>
      <button onClick={handleDownload} className=' btn-gradient text-white px-8 py-2 inline-flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl    '>Download pdf <LuArrowRight/></button>
    </div>
  );
}
