# Website & Administrative Dashboard Package — NoComm Ltd.

A fully integrated and completely standalone system that combines:

1. **The premium official frontend website** for **NoComm Ltd.**
2. **A Python-based backend server and complete administrative dashboard (NoComm CMS)** powered by an **SQLite database**.

---

## 📁 Project Structure

```text
nocom_landing_standalone/
├── server.py                   # Backend server, RESTful APIs, and file server
├── db.py                       # SQLite3 database engine, models, and initialization
├── database.db                 # Local database (created automatically)
├── index.html                  # Official main website
├── admin/                      # Central administrative dashboard
│   ├── index.html              # Admin dashboard interface and login page
│   ├── admin.css               # Dashboard styles (Dark Gold Luxury Theme)
│   └── admin.js                # Content management and quotation request logic
├── PHOTO/                      # Custom media, images, and videos
├── css/
│   ├── landing.css             # Global corporate design system (100% independent)
│   └── ambient-audio.css       # Audio player and effects styling
├── js/
│   ├── landing.js              # Website logic, calculator, and real-time API synchronization
│   └── ambient-audio.js        # Interactive ambient audio player
└── README.md                   # Project documentation
```

---

## 🚀 How to Run and Access the Admin Dashboard

### 1. Start the Python Server

From the project directory, run:

```bash
python server.py
```

### 2. Direct Access URLs

* 🌐 **Main Website**: http://localhost:3000
* ⚙️ **Administrative Dashboard (NoComm CMS)**: http://localhost:3000/admin

### 🔑 Default Admin Login Credentials

* **Username**: `admin`
* **Password**: `admin123`

---

## 🎛️ NoComm CMS — Administrative Dashboard Features

### 1. Overview Dashboard

Provides real-time monitoring of:

* Quotation requests
* Unread messages
* Active systems
* Overall system activity

### 2. Company Information & Hero Identity Management

Administrators can directly update:

* Phone numbers
* Email addresses
* Company address
* Commercial Registration (CR) number
* VAT number
* Hero section title
* Hero section description

### 3. Systems & Services Catalog

Complete management of the company's systems and activities, including:

* Add new systems and services
* Edit existing services
* Delete services
* Change service images
* Update service features
* Manage service icons
* Manage the full catalog of 8 systems and activities

### 4. Projects Showcase

Manage the company's project portfolio:

* Add projects
* Edit projects
* Delete projects
* Update project information
* Manage project status
* Assign and display clients

### 5. Leads & Inbox — Customer Management

A centralized inbox for managing:

* Quotation requests
* Website contact messages
* Customer inquiries

Available features include:

* View and read incoming requests
* Filter requests by status:

  * New
  * Read
  * Completed
* Manage customer leads
* Export all requests with one click to **Excel / CSV**

### 6. Media Library & File Uploads

A dedicated media management system that allows administrators to:

* Upload new images
* Upload videos
* Store media directly inside the `PHOTO/` directory
* Preview uploaded files instantly
* Copy media paths for use throughout the website

### 7. Smart Offline Graceful Fallback

The website is designed to remain fully functional even if the backend server is unavailable.

When the backend is offline:

* The website continues running normally.
* Default content is displayed automatically.
* The frontend does not completely depend on the API.
* Visitors can still access the main website and its essential information.

---

## 📌 System Overview

**NoComm Ltd.** is designed as a completely standalone full-stack solution, combining a premium corporate website with an integrated content management system.

The architecture provides:

**Frontend Website → Python Backend → RESTful API → SQLite Database**

while the **NoComm CMS** provides centralized control over the website's content, services, projects, customer inquiries, company information, and media assets.

The system is designed to be lightweight, maintainable, independent, and ready for future deployment to a cloud or production environment.
