// PDFDownloadButton.js
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

const PDFDownloadButton = ({ content }) => {
  const pdfRef = useRef();
  const { toPdf } = usePDF({
    targetRef: pdfRef,
    filename: "downloadable-content.pdf",
  });

  return (
    <div>
      <div ref={pdfRef}>{content}</div>
      <div className="flex items-center justify-between">
        <p>Check your receipt</p>
        <button onClick={toPdf}>Download PDF</button>
      </div>
    </div>
  );
};

export default PDFDownloadButton;
