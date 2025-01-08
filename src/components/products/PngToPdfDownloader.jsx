"use client";
import { useReactToPrint } from "react-to-print";

// import html2pdf from "html2pdf.js";
import { LuArrowRight } from "react-icons/lu";

export default function PngToPdfDownloader({ imageName, imageIdName, ref }) {
  const reactToPrintFn = useReactToPrint({ contentRef: ref });

  return (
    <div>
      <button
        onClick={() => reactToPrintFn()}
        className=" btn-gradient text-white px-8 py-2 inline-flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl    "
      >
        Download pdf <LuArrowRight />
      </button>
    </div>
  );
}
