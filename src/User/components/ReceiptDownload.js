import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptDownload = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text('Receipt', 10, 10);

    // Add receipt details (example)
    const receiptDetails = {
      date: '2024-07-22',
      transactionId: '123456',
      amount: '$100.00',
      items: [
        { description: 'Item 1', price: '$50.00' },
        { description: 'Item 2', price: '$50.00' }
      ]
    };

    // Add receipt details to PDF
    doc.setFontSize(12);
    doc.text(`Date: ${receiptDetails.date}`, 10, 20);
    doc.text(`Transaction ID: ${receiptDetails.transactionId}`, 10, 30);
    doc.text(`Amount: ${receiptDetails.amount}`, 10, 40);

    // Add table with items
    const tableColumn = ['Description', 'Price'];
    const tableRows = [];
    receiptDetails.items.forEach(item => {
      const itemData = [
        item.description,
        item.price
      ];
      tableRows.push(itemData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 50 });

    // Save the PDF
    doc.save('receipt.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Download Receipt</button>
    </div>
  );
};

export default ReceiptDownload;
