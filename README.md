
# Fullstack Inventory Management Dashboard

A fullstack **Inventory Management Dashboard** built with Next.js, styled with Tailwind css, featuring data visualization for inventory, products, expenses, and users personal setting. 
Utilizes Node.js with PostgreSQL for the backend,  deployed on AWS services including EC2, RDS, and S3. 
Users can manage and visualize data dynamically with different charts and grid layouts.

## 🛠️ **Tech Stack**
### **Frontend**:
- **Next.js** (with TypeScript)  
- **Tailwind CSS** – for styling.
- **Redux Toolkit** – for state management.
- **Redux Toolkit Query** – for handling API calls and data fetching.
- **Material UI Data Grid** – for creating dynamic grid tables.
- **Recharts** – for rendering interactive charts and graphs.
 ![page1](https://github.com/user-attachments/assets/ba19ae1e-5adb-4164-96c6-e7fd6cf5faa2)


### **Backend**:
- **Node.js** with **Express** – for building the REST API.
- **Prisma** – for database modeling and communication with **PostgreSQL**.
![page8](https://github.com/user-attachments/assets/a3020202-8de0-4504-96e0-1a2fc4204a60)

### **AWS Services**:
- **AWS EC2** – for hosting the backend.
- **AWS RDS** – for managing the PostgreSQL database.
- **AWS API Gateway** – for routing and managing API requests.
- **AWS Amplify** – for deploying and hosting the frontend.
- **AWS S3** – for file storage (e.g., product images, assets).

<blockquote>AWS Deployment Steps for Full-Stack Web App** 
1.Set Up VPC & Networking: 
vpc ->  subnet -> 1 public subnet + 2 private subnet -> 2+ availability zone -> create and attach vpc internet gateway -> route table: each subnet has its own route table and associate them with subnets -> public route table Connects to 0.0.0.0/0 

2.Set Up EC2 Instance
-> set up EC2 instance -> Generate a Key Pair -> allow ssh traffic and https traffic from internet to public subnet and auto assign public ip -> inbound security group rules(ssh http http) -> connect to instance -> install node, git, nvm,pm2 -> in code add "0.0.0.0" to listen to internet -> create config file in code to tell what to run when using pm -> clone code to the aws -> add port to env file ->  set pm2 command to monitor restart

3.Set Up RDS (Database)
 -> Create an RDS Database -> attach with 2 private subnets -> choose database and set password -> db management vpc security groups to get inbound traffic from ec2 instance -> copy endpoint to connect with ec2, add endpoint to env file -> configure db and db seed migrate 

4.Deploy Frontend with AWS Amplify
 ->  amplify for frontend app -> connect with github repo -> add env variable copy public ip address -> configure api gateway to all the pages ->  get invoke url to paste it in amply env variable 

5.Configure S3 for Image Storage
-> Create a New S3 Bucket for storing images -> bucket policy add policy to allow public access ->  use image links in app  <blockquote>

## 🌟 **Features**

### **Frontend (Client-Side)**:
1. **Data Dashboard**:
- Visualizes data using **Recharts** (bar charts, line graphs, pie charts).        
- Provides a comprehensive view of the inventory, expenses, and user data.      
 ![page2](https://github.com/user-attachments/assets/1d9bd530-e436-44cc-bc4b-846e38e193bd)

3. **Inventory Page**:
   - Displays a list of all inventory items.
   - Allows for filtering and searching through inventory.
![page3](https://github.com/user-attachments/assets/b50e352c-bafd-4608-9b75-c5d75a7a4bc5)

4. **Product Page**:
   - Shows detailed information about products in a **grid layout** using **Material UI Data Grid**.
   - Allows users to **create new products** directly from the dashboard.
![page9](https://github.com/user-attachments/assets/0b9074fe-af1d-434d-8969-9a133b3cfbf8)
![page10](https://github.com/user-attachments/assets/b7785885-13c7-4db7-82e1-fbb44488c455)

5. **User Page**:
   - Displays a list of users using **Material UI Grid**.
   - Includes search and filter capabilities.

6. **Expense Page**:
   - Provides a **dynamic pie chart** to display the expense summary.
   - Allows filtering by expense category for better analysis.
![page5](https://github.com/user-attachments/assets/15254d42-59d9-4e17-bd6e-95d7994fabd7)

7. **Settings Page**:
   - Mock page for personal settings, including dark mode, profile updates, etc.
   - Dark mode and other states are controlled using **Redux**.
![page4](https://github.com/user-attachments/assets/85973938-ac06-4c60-a892-74e03fcfb6f8)

7.**Responsive Design**:
- middle screen size
![page6](https://github.com/user-attachments/assets/07d63768-c8a4-4a44-9cd7-2e051e0482a0)
- small screen size

![page7](https://github.com/user-attachments/assets/160b0495-62f7-4e24-a1a1-6fe13799495c)


### **Backend (Server-Side)**:
- **Node.js** with **Express** powers the backend API.
- **Prisma** is used for **data modeling**, communicating with the **PostgreSQL** database hosted on **AWS RDS**.
- Backend is hosted on **AWS EC2** for secure and scalable performance.
  
## 🚀 **Deployment**
The frontend is deployed using **AWS Amplify**, and the backend is deployed on **AWS EC2**. **AWS API Gateway** manages the API endpoints, and **AWS S3** is used for storage of static assets.
  

## 🤝 **Credit**
I complete this project with the guide of this tutorial: https://www.youtube.com/watch?v=ddKQ8sZo_v8
