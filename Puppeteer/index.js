const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/invoice", async (req, res) => {

  const browser = await puppeteer.launch(); //Open Chrome automatically (without showing UI). and It returns a browser instance. Without this → nothing works.
  const page = await browser.newPage(); //It creates a new tab inside that browser. and Open a new tab in Chrome.

  const html = `
  <html>
  <head>
    <style>
      body { font-family: Arial; padding: 20px; }
      h1 { text-align: center; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      table, th, td { border: 1px solid black; }
      th, td { padding: 8px; text-align: center; }
      .right { text-align: right; }
    </style>
  </head>
  <body>

    <h1>TAX INVOICE</h1>

    <h3>Seller Details</h3>
    <p>
      ABC Electronics Pvt Ltd <br>
      GSTIN: 29ABCDE1234F1Z5 <br>
      Bangalore, Karnataka <br>
      Phone: +91 9876543210
    </p>

    <h3>Bill To</h3>
    <p>
      Rahul Sharma <br>
      GSTIN: 29XYZAB5678K1Z2 <br>
      Mysore, Karnataka
    </p>

    <table>
      <tr>
        <th>No</th>
        <th>Item</th>
        <th>Qty</th>
        <th>Price</th>
        <th>GST 18%</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Laptop Dell i5</td>
        <td>1</td>
        <td>50000</td>
        <td>9000</td>
        <td>59000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Wireless Mouse</td>
        <td>2</td>
        <td>1600</td>
        <td>288</td>
        <td>1888</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Keyboard</td>
        <td>1</td>
        <td>1200</td>
        <td>216</td>
        <td>1416</td>
      </tr>
    </table>

    <h3 class="right">Subtotal: ₹52,800</h3>
    <h3 class="right">Total GST: ₹9,504</h3>
    <h2 class="right">Grand Total: ₹62,304</h2>

  </body>
  </html>
  `;

  await page.setContent(html); //It loads your HTML string into the browser tab. So instead of opening a URL Render this HTML content

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true
  }); //Print this page as a PDF. and It returns a PDF file buffer stored in memory. That pdf variable contains actual PDF data.

  await browser.close(); // Closes the browser.

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=invoice.pdf"
  });

  res.send(pdf);// Sends the generated PDF to the client (React or browser). The pdf variable contains binary PDF data.
}); 

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

/*
Full Flow Visualization
  puppeteer.launch()      → Open Chrome
  browser.newPage()       → Open new tab
  page.setContent(html)   → Load invoice HTML
  page.pdf()              → Convert to PDF
  browser.close()         → Close Chrome
  res.set()               → Tell browser it's a PDF
  res.send(pdf)           → Send file to user
*/

/**
Interview Level Explanation (Short Version) :
  launch() → starts headless browser
  newPage() → creates tab
  setContent() → loads HTML
  pdf() → prints page to PDF
  close() → closes browser
  res.set() → sets HTTP headers
  res.send() → sends file to client
 */