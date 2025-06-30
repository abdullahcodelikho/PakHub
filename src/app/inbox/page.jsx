"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Inbox() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSignedIn) return;
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/message?toUserRef=${user.publicMetadata.userMogoId}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data.messages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [isSignedIn, user]);

  if (!isLoaded) return <div className="text-center p-8">Loading...</div>;
  if (!isSignedIn)
    return (
      <div className="text-center p-8 text-xl font-semibold">
        Please sign in to view your inbox.
      </div>
    );

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Inbox</h1>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : messages.length === 0 ? (
        <div className="text-white">No messages yet.</div>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-cyan-700">{msg.fromName}</span>
                <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <div className="mb-1">
                <span className="font-semibold">Listing: </span>
                <Link href={`/listing/${msg.listingId}`} className="text-blue-600 hover:underline">
                  {msg.listingTitle}
                </Link>
              </div>
              <div className="mb-1">
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${msg.fromEmail}`} className="text-blue-600 hover:underline">{msg.fromEmail}</a>
              </div>
              <div className="mt-2 text-gray-800">
                <span className="font-semibold">Message:</span>
                <div className="whitespace-pre-line mt-1">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
} 