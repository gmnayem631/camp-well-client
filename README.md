# 🏕️ CampWell — Camp Management Web App

**CampWell** is a full-stack web application that allows healthcare camp organizers to **create**, **manage**, **update**, and **delete** camp events. It features secure authentication, role-based access, and seamless integration with a backend server and MongoDB database.

---

## ✨ Features

### 🧑‍⚕️ For Organizers
- Create new healthcare camps
- View and manage all of their submitted camps
- Update camp information via `/update-camp/:campId`
- Delete camp entries via `/delete-camp/:campId`
- Only camps created by the logged-in organizer are visible to them

### 📋 Camp Details Page
- Accessible via `/camp-details/:campId`
- Loads full information about the selected camp from the **backend**
- Displays details such as title, doctor, fees, date, location, and description

### 🔐 Authentication & Authorization
- Firebase Authentication
- Role-based access for admins and organizers
- Secure API access using custom Axios instance (`useAxiosSecure`)

---

## 🛠️ Technologies Used

### Frontend
- React
- React Router DOM
- TailwindCSS + DaisyUI
- Axios
- React Hook Form
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
