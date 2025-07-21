# 🕸️ FlowScrape

**FlowScrape** is an intelligent web-scraper builder built using **Next.js** that lets users **create, preview, and execute custom web scraping flows** without writing code. Designed to simplify scraping logic, FlowScrape helps you build a step-by-step scraping pipeline using a user-friendly interface.

---

## 🚀 Features

- 🔧 Visual scraper flow builder
- 📄 DOM element selection and preview
- 💾 Exportable JSON flow schema
- 🧪 Real-time testing of selectors
- 💻 Built with Next.js + Tailwind CSS
- 🔐 Secure execution sandbox (optional)
- ☁️ Cloud-ready for headless deployments

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](./home_.png)

### 📊 Workflow Page
![Dashboard](./workflow_page.png)

### 🎥 Credentials Page
![Credentials Page](./credentials_.png)

### 🪭 Billing Page
![Billing Page](./billing_.png)

### 👀 Workflow Editor(Powered by React Flow)
![Workflow editor](./workflow_editor.png)

### 👟 Worklow Run
![Workflow run](./workflow_run.png)

### 🕺 All Runs of a Worklow 
![Live Class](./all_runs.png)


## 📦 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, ShadCN, Zod, React Query, React Flow(Nodes and Edges)
- **Scraping Logic**: Puppeteer
- **Headless Browser Execution**: Puppeteer Chromium
- **Schedule Workflows**: Cron Jobs
- **Publish workflows**: Once published can be scheduled
- **Credentials**: Use Secure credentials in the workflow
- **Billing**: Buy More credits to make new scraping logics

---

## 🛠️ Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/scrape-flow-v1.git
cd flowscrape
npm install
