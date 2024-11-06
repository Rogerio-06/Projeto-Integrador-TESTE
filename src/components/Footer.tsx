"use client";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 text-center">
            <div id="contact">
                <p className="mb-4">Entre em contato: contato@unifome.com</p>
                <ul className="flex justify-center gap-4">
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400" aria-label="LinkedIn">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub">
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="Facebook">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="mt-4">&copy; 2024 Unifome. Todos os direitos reservados.</p>
        </footer>
    );
}