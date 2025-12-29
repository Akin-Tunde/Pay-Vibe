"use client";

import { useEffect, useState } from "react";
import CreateStream from "../../components/CreateStream";
import StreamCard from "../../components/StreamCard";
import { fetchStreams } from "../../lib/contract"; // uses get-all-streams
import { useToast } from "../../components/Toast";

export default function Dashboard() {
  const [streams, setStreams] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStreams = async () => {
      setLoading(true);
      try {
        const data = await fetchStreams();
        setStreams(data);
      } catch (err) {
        // show toast on error
        addToast({ message: `Failed to load streams: ${err.message}`, type: "error" });
      } finally {
        setLoading(false);
      }
    };
    getStreams();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Employer creates new streams */}
      <CreateStream />

      {/* Display all active streams */}
      <div className="mt-6">
        {loading ? (
          <p>Loading streams...</p>
        ) : streams.length === 0 ? (
          <p>No active streams yet</p>
        ) : (
          streams.map((stream) => (
            <StreamCard key={stream.id} stream={stream} />
          ))
        )}
      </div>
    </div>
  );
}