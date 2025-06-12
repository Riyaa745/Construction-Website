'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919837218345" // Replace with your number
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
