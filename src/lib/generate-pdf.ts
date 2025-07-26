import { ResumeAnalysisType } from "@/types";
import jsPDF from "jspdf";

export const generatePDF = (item: ResumeAnalysisType) => {
  const doc = new jsPDF();
  const x = 10;
  let y = 30;

  //Title
  doc.setFontSize(24);
  doc.setTextColor("#1e2939");
  doc.text("Resume Analysis", x, y);
  y += 10;
  // job role name
  doc.setFontSize(16);
  doc.setTextColor("#616161");
  doc.text(`Role Name: ${item.jobRole}`, x, y);
  y += 10;

  //draw a line
  doc.setLineWidth(0.5);
  doc.setDrawColor("#00bc7d");
  doc.line(x, y, 100, y);
  y += 10;

  //match score
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#263238");
  doc.text("Overall Score:", x, y);
  doc.setFont("helvetica", "normal");
  doc.text(`${item.analysisResult.matchScore}%`, x + 35, y);
  y += 30;

  //1.Strengths
  doc.setFontSize(16);
  doc.setFont("helvetica", "semi-bold");
  doc.text("1.Strengths:", x, y);
  y += 10;

  doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  item.analysisResult.strengths.forEach(strength => {
    doc.setFontSize(13);
    doc.setTextColor("#008236");
    doc.text(`${strength.slice(0, 100)}`, x + 10, y);

    if (strength.length >= 100) {
      y += 5;
      doc.text(`${strength.slice(100)}`, x + 10, y);
    }
    y += 10;
  });

  y += 10;

  //2.Weaknesses
  doc.setFontSize(16);
  doc.setTextColor("#1e2939");
  doc.setFont("helvetica", "semi-bold");
  doc.text("2. Weaknesses:", x, y);
  y += 10;

  doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  item.analysisResult.weaknesses.forEach(text => {
    doc.setFontSize(13);
    doc.setTextColor("#c10007");
    doc.text(`${text.slice(0, 100)}`, x + 10, y);

    if (text.length >= 100) {
      y += 5;
      doc.text(`${text.slice(100)}`, x + 10, y);
    }
    y += 10;
  });

  y += 10;

  //3.Missing Skills
  doc.setFontSize(16);
  doc.setTextColor("#1e2939");
  doc.setFont("helvetica", "semi-bold");
  doc.text("3. Missing Skills:", x, y);
  y += 10;

  doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  item.analysisResult.missingSkills.forEach(text => {
    if (y > 270) {
      doc.addPage();
      y = 10;
    }
    doc.setFontSize(13);
    doc.setTextColor("#c10007");
    doc.text(`${text.slice(0, 100)}`, x + 10, y);

    if (text.length >= 100) {
      y += 5;
      doc.text(`${text.slice(100)}`, x + 10, y);
    }
    y += 10;
  });

  y += 10;

  if (y > 250) {
    doc.addPage();
    y = 10;
  }

  //4.Recommended Improvements
  doc.setFontSize(16);
  doc.setFont("helvetica", "semi-bold");
  doc.setTextColor("#1e2939");
  doc.text("4.Recommended Improvements:", x, y);
  y += 10;

  doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  item.analysisResult.recommendedImprovements.forEach(text => {
    doc.setFontSize(13);
    doc.setTextColor("#008236");
    doc.text(`${text.slice(0, 100)}`, x + 10, y);

    if (text.length >= 100) {
      y += 5;
      doc.text(`${text.slice(100)}`, x + 10, y);
    }
    y += 10;
  });

  y += 10;

  //5. ATS Friendliness
  doc.setFontSize(16);
  doc.setFont("helvetica", "semi-bold");
  doc.setTextColor("#1e2939");
  doc.text("5. ATS Friendliness:", x, y);
  y += 10;

  doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  item.analysisResult.atsFriendliness.forEach(text => {
    doc.setFontSize(13);
    doc.setTextColor("#008236");
    doc.text(`${text.slice(0, 100)}`, x + 10, y);

    if (text.length >= 100) {
      y += 5;
      doc.text(`${text.slice(100)}`, x + 10, y);
    }
    y += 10;
  });

  y += 10;

  //for preview
  //   const pdfBlob = doc.output("blob");
  //   return URL.createObjectURL(pdfBlob);

  //download pdf
  doc.save(`${item.id}-resume-analysis.pdf`);
};
