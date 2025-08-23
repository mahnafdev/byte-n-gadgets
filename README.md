# ByteNGadgets – Frontend

## Project Description

**ByteNGadgets** is a gadget showcase platform built with **Next.js 15**. Users can browse gadgets, view details, and add new gadgets. Authentication is handled using **NextAuth** (Google Login).

## Setup & Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mahnafdev/byte-n-gadgets-client.git
    ```

2. Go to the project directory:

    ```bash
    cd byte-n-gadgets-client
    ```

3. Create a `.env.local` file at the root directory and paste:

    ```env
    GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
    GOOGLE_AUTH_CLIENT_SECRET=your_google_auth_client_secret
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

🎉 Congrats! The app will be running at [localhost:3000](http://localhost:3000).

## Route Summary

### Public Routes

-   `/` – Landing/Home page
-   `/api/auth/signin` – Login page (only Google login)
-   `/gadgets` – Gadgets listing page
-   `/gadgets/:id` – Gadget details page

### Private Routes (authenticated users can access)

-   `/dashboard/add-gadget` – Add a new gadget
