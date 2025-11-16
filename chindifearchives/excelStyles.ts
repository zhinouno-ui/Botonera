// utils/excelStyles.ts

export const headerStyle = {
  font: { bold: true, color: { rgb: "FFFFFFFF" } },
  fill: { fgColor: { rgb: "FF0B1722" } },
  alignment: { horizontal: "center", vertical: "center" },
};

const baseCellStyle = {
    alignment: { vertical: "center" },
    border: {
        top: { style: "thin", color: { rgb: "FF333333" } },
        bottom: { style: "thin", color: { rgb: "FF333333" } },
        left: { style: "thin", color: { rgb: "FF333333" } },
        right: { style: "thin", color: { rgb: "FF333333" } },
    }
};

export const statusStyles = {
  OK: {
    ...baseCellStyle,
    fill: { fgColor: { rgb: "FFD6F9E8" } }, // Light green
  },
  MISSING_CHUNIOR: {
    ...baseCellStyle,
    fill: { fgColor: { rgb: "FFFFEBEE" } }, // Light red
  },
  MISSING_AGENT: {
    ...baseCellStyle,
    fill: { fgColor: { rgb: "FFFFF3E0" } }, // Light yellow
  },
  ADMIN_CHARGE: {
    ...baseCellStyle,
    fill: { fgColor: { rgb: "FFE3F2FD" } }, // Light blue
  },
  DEFAULT: {
    ...baseCellStyle
  }
};

export const currencyFormat = '"$"#,##0.00;[Red]-"$"#,##0.00';
