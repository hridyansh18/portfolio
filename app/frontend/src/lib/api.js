// src/lib/api.js
// Update BASE_URL when you deploy your backend

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8001";

/**
 * Sends the contact form data to the Express backend.
 * Throws an error if the request fails so Contact.jsx can catch it.
 */
export async function sendContactMessage({ name, email, subject, message }) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || "Request failed");
  }

  return res.json();
}

/**
 * Direct download link for your CV PDF.
 * Put your CV file inside frontend/public/cv/ and update the filename.
 */
export const cvDownloadUrl = "/cv/Hridyansh_Chaudhary_CV.pdf";