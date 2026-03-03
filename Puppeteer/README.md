🔥 1️⃣ puppeteer.launch(options)

This starts Chromium/Chrome.

const browser = await puppeteer.launch(options);
✅ ALL Important Launch Options
puppeteer.launch({
  headless,
  executablePath,
  args,
  defaultViewport,
  ignoreHTTPSErrors,
  slowMo,
  devtools,
  userDataDir,
  timeout,
  pipe,
  env,
  dumpio,
  protocolTimeout
})

Now explanation one-by-one 👇

1️⃣ headless
headless: true

true → no UI (production)

false → visible browser (debugging)

"new" → modern headless mode (recommended)

2️⃣ executablePath
executablePath: "/usr/bin/google-chrome"

Use custom Chrome instead of bundled Chromium.

Used in:

VPS

Docker

Production servers

3️⃣ args
args: ["--no-sandbox", "--disable-setuid-sandbox"]

Pass Chrome flags.

Common flags:

Flag	Purpose
--no-sandbox	Required on VPS
--disable-setuid-sandbox	VPS fix
--start-maximized	Full screen
--disable-gpu	Disable GPU
4️⃣ defaultViewport
defaultViewport: {
  width: 1280,
  height: 800
}

Controls screen size.

Set null to use full window.

5️⃣ ignoreHTTPSErrors
ignoreHTTPSErrors: true

Allows self-signed SSL websites.

6️⃣ slowMo
slowMo: 100

Adds delay between actions (100ms).

Used for debugging automation.

7️⃣ devtools
devtools: true

Opens Chrome DevTools automatically.

8️⃣ userDataDir
userDataDir: "./my-profile"

Stores cookies/session data.

Useful for:

Keeping login session

Avoiding repeated login

9️⃣ timeout
timeout: 30000

Launch timeout in milliseconds.

🔟 pipe

Advanced internal communication setting.

Rarely used.

1️⃣1️⃣ env

Set environment variables for browser.

1️⃣2️⃣ dumpio
dumpio: true

Shows browser logs in terminal.

Useful for debugging.

1️⃣3️⃣ protocolTimeout

Timeout for CDP (Chrome DevTools Protocol).

Advanced.

🧠 What Does launch() Return?

It returns a Browser object.

🔥 2️⃣ Browser Object Methods & Properties
const browser = await puppeteer.launch();
Important Browser Methods:
Method	Purpose
browser.newPage()	Create tab
browser.pages()	Get all open pages
browser.close()	Close browser
browser.disconnect()	Disconnect without closing
browser.version()	Chrome version
browser.wsEndpoint()	WebSocket URL
browser.process()	Get browser process
browser.targets()	Get targets (tabs, workers)
browser.createBrowserContext()	Create incognito context
browser.defaultBrowserContext()	Default context
Browser Context (Important Advanced Concept)

Like separate users in Chrome.

const context = await browser.createBrowserContext();
const page = await context.newPage();

Used for:

Multiple login sessions

Isolated environments

🔥 3️⃣ browser.newPage()

Creates new tab.

const page = await browser.newPage();

It returns a Page object.

🔥 4️⃣ Page Object (Most Powerful)

This is where real work happens.

🌍 Navigation
page.goto(url)
page.reload()
page.goBack()
page.goForward()
page.waitForNavigation()
🖱 Interaction
page.click(selector)
page.type(selector, text)
page.hover(selector)
page.select(selector, value)
page.focus(selector)
📄 Content Control
page.setContent(html)
page.content()
page.setViewport()
page.addStyleTag()
page.addScriptTag()
🧾 PDF & Screenshot
page.pdf()
page.screenshot()
📊 Data Extraction
page.evaluate()
page.$()
page.$$()
page.$eval()
page.$$eval()
⏳ Waiting Methods
page.waitForSelector()
page.waitForTimeout()
page.waitForFunction()
page.waitForNetworkIdle()
🍪 Cookies
page.cookies()
page.setCookie()
page.deleteCookie()
🌐 Headers & Authentication
page.setExtraHTTPHeaders()
page.authenticate()
🧠 Events
page.on("request", handler)
page.on("response", handler)
page.on("console", handler)
page.on("error", handler)

Used for:

Logging

Network tracking

Debugging

📱 Emulation
page.emulate()
page.setUserAgent()

Simulate:

Mobile devices

Tablets

Custom browser agents

🔒 Security
page.setJavaScriptEnabled(false)

Disable JS execution.

🏗 Full Lifecycle Understanding
puppeteer.launch() → Starts Chrome
browser.newPage() → Opens tab
page.goto() or setContent() → Load content
page actions → Click / Type / Extract
page.pdf() → Generate PDF
page.close() → Close tab
browser.close() → Shutdown Chrome
🏆 Production-Level Launch Example
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  defaultViewport: null,
  ignoreHTTPSErrors: true,
  timeout: 60000
});
🎯 Final Mental Model
Object	Controls
puppeteer	Library
browser	Whole Chrome
context	Separate user session
page	Single tab
page.pdf()	Print tab

🔥 FULL LIST OF page.pdf() OPTIONS (Explained Clearly)
await page.pdf({
  path,
  scale,
  displayHeaderFooter,
  headerTemplate,
  footerTemplate,
  printBackground,
  landscape,
  pageRanges,
  format,
  width,
  height,
  preferCSSPageSize,
  margin,
  omitBackground,
  timeout
});

Now I’ll explain EACH ONE.

1️⃣ path
path: "invoice.pdf"
What it does:

Saves PDF directly to file.

If you don't use it → PDF stays in memory.

2️⃣ format
format: "A4"
Predefined Paper Sizes:

A0

A1

A2

A3

A4 ✅ (most common)

A5

Letter (US)

Legal

Tabloid

Use this OR width/height.

3️⃣ width and height
width: "8.5in",
height: "11in"

Used when you want custom paper size.

Units supported:

px

in

cm

mm

4️⃣ landscape
landscape: true

false → Portrait (default)

true → Horizontal layout

Used for:

Wide reports

Tables

5️⃣ printBackground
printBackground: true

Very important.

If false:

Background colors removed

Background images removed

For invoice → always true.

6️⃣ omitBackground
omitBackground: true

Makes background transparent.

Rarely used.

7️⃣ scale
scale: 0.8

Controls zoom level.

Range:

Minimum: 0.1

Maximum: 2

Used when content slightly overflows.

8️⃣ margin
margin: {
  top: "20px",
  right: "20px",
  bottom: "20px",
  left: "20px"
}

Controls spacing from paper edges.

Units:

px

cm

mm

in

Used for:

Professional printing

Space for headers

9️⃣ displayHeaderFooter
displayHeaderFooter: true

Enables header and footer section.

Without this → header/footer won't show.

🔟 headerTemplate
headerTemplate: `
  <div style="font-size:10px; text-align:center; width:100%;">
    My Company Pvt Ltd
  </div>
`

Custom HTML for header.

Special classes available:

Class	Meaning
pageNumber	Current page
totalPages	Total pages
date	Print date
title	Page title
url	Page URL

Example with page number:

<span class="pageNumber"></span> /
<span class="totalPages"></span>
1️⃣1️⃣ footerTemplate
footerTemplate: `
  <div style="font-size:10px; text-align:center; width:100%;">
    Page <span class="pageNumber"></span>
  </div>
`

Used for:

Page numbers

Terms & conditions

Signature section

1️⃣2️⃣ pageRanges
pageRanges: "1-3"

Print specific pages.

Examples:

"1" → only page 1

"1-5" → pages 1 to 5

"1,3,5" → specific pages

Rare but useful.

1️⃣3️⃣ preferCSSPageSize
preferCSSPageSize: true

If your CSS has:

@page {
  size: A4;
}

This option tells Puppeteer:

Follow CSS page size instead of format option.

Used in advanced layout.

1️⃣4️⃣ timeout
timeout: 30000

Time in milliseconds before failing.

Default is 30 seconds.

🏆 FULL PROFESSIONAL EXAMPLE
const pdf = await page.pdf({
  format: "A4",
  landscape: false,
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: `
    <div style="font-size:10px; width:100%; text-align:center;">
      ABC Electronics Pvt Ltd
    </div>
  `,
  footerTemplate: `
    <div style="font-size:10px; width:100%; text-align:center;">
      Page <span class="pageNumber"></span> of 
      <span class="totalPages"></span>
    </div>
  `,
  margin: {
    top: "40px",
    bottom: "40px",
    left: "20px",
    right: "20px"
  }
});
🧠 Important Things Beginners Miss
1️⃣ Wait for content before generating PDF
await page.waitForSelector("table");

If not → blank PDF sometimes.

2️⃣ Wait for fonts
await page.evaluateHandle('document.fonts.ready');

Prevents missing font issues.

3️⃣ Set viewport (optional)
await page.setViewport({
  width: 1200,
  height: 800
});
🎯 Complete Mental Model
HTML → Chrome renders → Puppeteer prints → PDF Buffer → Express sends → Browser downloads
🚀 Final Understanding

page.pdf() is basically Chrome's:

Ctrl + P → Save as PDF

But automated.

res.set() — What It Really Does
res.set({
  "Content-Type": "application/pdf",
  "Content-Disposition": "attachment; filename=invoice.pdf"
});
What is this?

It sets HTTP headers.

Headers are metadata sent before the actual response body.

🧠 What is HTTP Header?

Example of real HTTP response:

HTTP/1.1 200 OK
Content-Type: application/pdf
Content-Disposition: attachment; filename=invoice.pdf
Content-Length: 23841

(binary PDF data here)

Headers tell the browser:

What type of data is coming

How to handle it

How to display/download it

🔥 3️⃣ "Content-Type"
"Content-Type": "application/pdf"
What it means:

Tells browser:

“The data I'm sending is a PDF file.”

If you send wrong type:

"Content-Type": "text/plain"

Browser may:

Show garbage text

Not download properly

Common Content Types
Type	Meaning
application/pdf	PDF
application/json	JSON
text/html	HTML page
image/png	PNG image
text/plain	Plain text
🔥 4️⃣ "Content-Disposition"
"Content-Disposition": "attachment; filename=invoice.pdf"

This controls:

Download or display?

What filename?

Two Main Modes:
1️⃣ attachment
attachment; filename=invoice.pdf

Forces download.

2️⃣ inline
inline; filename=invoice.pdf

Opens inside browser tab (if supported).

Dynamic filename example:
res.set({
  "Content-Disposition": `attachment; filename=invoice-${Date.now()}.pdf`
});
🔥 5️⃣ res.send(pdf)
res.send(pdf);

This sends the actual response body.

In this case:

pdf is a Buffer

Contains binary PDF data

🧠 What Does res.send() Accept?
Type	Behavior
String	Sends text
Object	Sends JSON
Buffer	Sends binary
Array	Sends JSON

Example:

res.send("Hello")
res.send({ name: "John" })
res.send(Buffer)
🔥 Difference Between Similar Methods
1️⃣ res.send()

General purpose.
Auto detects type.

2️⃣ res.json()
res.json({ name: "John" });

Sets:

Content-Type: application/json

Automatically converts to JSON.

3️⃣ res.end()

Lower level.
Ends response manually.

Rarely needed in Express.

4️⃣ res.download()

Special method:

res.download("invoice.pdf");

Automatically sets:

Content-Disposition

Content-Type

But works for saved files only.

🔥 Complete PDF Flow With Headers
const pdf = await page.pdf();

res.status(200); // optional status code

res.set({
  "Content-Type": "application/pdf",
  "Content-Disposition": "attachment; filename=invoice.pdf",
  "Content-Length": pdf.length
});

res.send(pdf);
🧠 Advanced Headers (Production)
1️⃣ Cache Control
res.set("Cache-Control", "no-store");

Prevents browser caching invoice.

2️⃣ CORS (if React calling API)
res.set("Access-Control-Allow-Origin", "*");
3️⃣ Security Header
res.set("X-Content-Type-Options", "nosniff");

Prevents MIME sniffing attacks.

🔥 Alternative Cleaner Way

Instead of:

res.set({...});
res.send(pdf);

You can chain:

res
  .status(200)
  .type("application/pdf")
  .attachment("invoice.pdf")
  .send(pdf);

Much cleaner.

🏗 Full Mental Model
Client Request → Express Route
        ↓
Generate PDF (Puppeteer)
        ↓
Set Headers (res.set)
        ↓
Send Binary Data (res.send)
        ↓
Browser Downloads File
🏆 Important Beginner Mistake

If you forget:

"Content-Type": "application/pdf"

Browser may:

Corrupt file

Show blank page

Download incorrectly

🎯 Summary
Code	Purpose
res.set()	Set HTTP headers
Content-Type	File type
Content-Disposition	Download behavior
res.send()	Send actual data
res.status()	Set HTTP status