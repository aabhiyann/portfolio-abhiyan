import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const MelodyHubCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="MelodyHub"
      subtitle="Real-time social music platform that combines Spotify streaming with Discord-style social features."
      heroImage="/images/case-studies/melodyhub.png"
      tags={["React", "Socket.IO", "Node.js", "MongoDB"]}
      stats={[
        { label: "Tech", value: "Socket.IO" },
        { label: "Type", value: "Team Project" },
        { label: "Role", value: "Full Stack" },
        { label: "Users", value: "100+ Beta" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/MelodyHub",
        live: "https://udaymelodyhhub.vercel.app",
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          MelodyHub is a real-time social music platform that combines the
          streaming capabilities of Spotify with the social features of Discord.
          Built as a team project for our Object-Oriented Design course, it
          allows users to listen to music together in synchronized rooms.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Concept</h2>
        <p>
          <strong>"Spotify meets Discord"</strong>
        </p>
        <p>
          Music is inherently social, but most streaming platforms are isolated
          experiences. We wanted to build a platform where friends could
          virtually hang out, chat, and listen to the same song at the exact
          same time—no matter where they are.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Solution</h2>
        <p>
          We architected a real-time system that synchronizes audio playback
          across all clients.
        </p>
        <ul className="mb-6">
          <li>
            <strong>Synchronized Playback:</strong> When the DJ hits play,
            everyone hears music. If someone seeks to 1:30, everyone jumps to
            1:30 in sync.
          </li>
          <li>
            <strong>Social Rooms:</strong> Users can create public or private
            listening rooms based on genres or moods.
          </li>
          <li>
            <strong>Room State Management:</strong> Used the Observer pattern to
            handle real-time updates for user presence and chat.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>
        <h3>Real-Time Sync Engine</h3>
        <p>
          The core challenge was latency. We used <strong>Socket.IO</strong> to
          broadcast playback events (play/pause/seek).
        </p>
        <pre className="bg-bg-surface p-4 rounded-lg overflow-x-auto text-sm mb-4">
          {`// Server broadcasts playback state
socket.to(roomId).emit('sync-playback', {
  songId,
  timestamp,
  isPlaying
});`}
        </pre>
        <h3>Audio Infrastructure</h3>
        <p>
          We integrated <strong>Cloudinary</strong> as our audio CDN to ensure
          fast, reliable streaming. The backend (Node.js/Express) manages
          metadata in MongoDB, while the frontend fetches the optimal audio
          format for the user's device.
        </p>
        <h3>Authentication</h3>
        <p>
          We implemented <strong>Clerk</strong> for secure, easy-to-use
          authentication, allowing us to focus on the core social features like
          room management and chat.
        </p>
      </section>

      <section className="mb-12">
        <h2>Team Collaboration</h2>
        <p>
          This was a 3-person Agile project. We held daily standups, worked in
          2-week sprints, and used GitHub for code reviews. I learned how to
          decouple modules so we could work in parallel without breaking each
          other's code.
        </p>
      </section>

      <section className="mb-12">
        <h2>Why This Matters</h2>
        <p>
          MelodyHub demonstrates my ability to build{" "}
          <strong>real-time, event-driven systems</strong>. It explores the
          complexities of state synchronization, WebSocket communication, and
          collaborative software design patterns.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default MelodyHubCaseStudy;
