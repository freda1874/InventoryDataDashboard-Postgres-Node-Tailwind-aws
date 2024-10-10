
# Fullstack Inventory Management Dashboard

A fullstack **Inventory Management Dashboard** built with Next.js, featuring data visualization for inventory, products, expenses, and users. 
Utilizes Node.js with PostgreSQL for the backend, styled with Tailwind, and deployed on AWS services including EC2, RDS, and S3. 
Users can manage and visualize data dynamically with different charts and grid layouts.

## 🛠️ **Tech Stack**

### **Frontend**:
- **Next.js** (with TypeScript)  
- **Tailwind CSS** – for styling.
- **Redux Toolkit** – for state management.
- **Redux Toolkit Query** – for handling API calls and data fetching.
- **Material UI Data Grid** – for creating dynamic grid tables.
- **Recharts** – for rendering interactive charts and graphs.

### **Backend**:
- **Node.js** with **Express** – for building the REST API.
- **Prisma** – for database modeling and communication with **PostgreSQL**.

### **AWS Services**:
- **AWS EC2** – for hosting the backend.
- **AWS RDS** – for managing the PostgreSQL database.
- **AWS API Gateway** – for routing and managing API requests.
- **AWS Amplify** – for deploying and hosting the frontend.
- **AWS S3** – for file storage (e.g., product images, assets).

## 🌟 **Features**

### **Frontend (Client-Side)**:
1. **Data Dashboard**:
   - Visualizes data using **Recharts** (bar charts, line graphs, pie charts).
   - Provides a comprehensive view of the inventory, expenses, and user data.
  
2. **Inventory Page**:
   - Displays a list of all inventory items.
   - Allows for filtering and searching through inventory.

3. **Product Page**:
   - Shows detailed information about products in a **grid layout** using **Material UI Data Grid**.
   - Allows users to **create new products** directly from the dashboard.

4. **User Page**:
   - Displays a list of users using **Material UI Grid**.
   - Includes search and filter capabilities.

5. **Expense Page**:
   - Provides a **dynamic pie chart** to display the expense summary.
   - Allows filtering by expense category for better analysis.

6. **Settings Page**:
   - Mock page for personal settings, including dark mode, profile updates, etc.
   - Dark mode and other states are controlled using **Redux**.

### **Backend (Server-Side)**:
- **Node.js** with **Express** powers the backend API.
- **Prisma** is used for **data modeling**, communicating with the **PostgreSQL** database hosted on **AWS RDS**.
- Backend is hosted on **AWS EC2** for secure and scalable performance.
  
## 🚀 **Deployment**

The frontend is deployed using **AWS Amplify**, and the backend is deployed on **AWS EC2**. **AWS API Gateway** manages the API endpoints, and **AWS S3** is used for storage of static assets.
  

## 🤝 **Credit**
I complete this project with the guide of this tutorial: https://www.youtube.com/watch?v=ddKQ8sZo_v8
