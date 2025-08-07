"use client";

import { useState, useEffect } from "react";
import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";
import BezelBottom from "../components/BezelBottom";

export default function GuestBook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setError("Gagal memuat data."));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !message.trim()) {
      setError("Nama dan pesan wajib diisi.");
      return;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    const newEntry = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Gagal mengirim pesan.");
        return;
      }

      const savedEntry = await res.json();
      setEntries([savedEntry, ...entries]);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim.");
    }
  };

  return (
    <PhoneFrame>
      <Navbar />
      <div className="flex flex-col h-full mt-20 px-4">
        <h1 className="text-yellow-500 font-bold text-xl mb-4 text-center">Guest Book</h1>

        <form onSubmit={handleSubmit} className="mb-4 space-y-3">
          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          )}
          <input
            type="text"
            placeholder="Nama *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-yellow-400 bg-yellow-100 px-3 py-2 text-black"
            required
          />
          <input
            type="email"
            placeholder="Email (opsional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-yellow-400 bg-yellow-100 px-3 py-2 text-black"
          />
          <textarea
            placeholder="Pesan *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded border border-yellow-400 bg-yellow-100 px-3 py-2 text-black resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
          >
            Kirim Pesan
          </button>
        </form>

        <div className="flex-1 overflow-y-auto custom-scroll">
          {entries.length === 0 ? (
            <p className="text-yellow-300 text-center mt-8">Belum ada pesan.</p>
          ) : (
            <ul className="space-y-4">
              {entries.map(({ id, name, email, message, date }) => (
                <li
                  key={id}
                  className="border border-yellow-400 rounded p-3 bg-yellow-50 text-black"
                >
                  <div className="flex justify-between text-xs text-yellow-700 mb-1 font-semibold">
                    <span>{name}</span>
                    <span>{new Date(date).toLocaleString("id-ID", {
                      dateStyle: "short",
                      timeStyle: "short"
                    })}</span>
                  </div>
                  <p className="whitespace-pre-line">{message}</p>
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="text-yellow-600 underline mt-1 inline-block text-xs"
                      rel="noopener noreferrer"
                    >
                      {email}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <BezelBottom />
    </PhoneFrame>
  );
}
