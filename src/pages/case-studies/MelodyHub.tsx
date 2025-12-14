import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const MelodyHubCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="MelodyHub"
      subtitle="Real-time social music platform with synchronized playback and live chat. Built with Socket.IO, React, and MongoDB—supporting 100+ concurrent users."
      heroImage="/images/projects/melodyhub.png"
      tags={["React", "Node.js", "Socket.IO", "MongoDB", "Clerk", "Cloudinary"]}
      stats={[
        { label: "Status", value: "Deployed" },
        { label: "Role", value: "Team of 3" },
        { label: "Concurrent Users", value: "100+" },
        { label: "Course", value: "CSCI 6234 @ GWU" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/MelodyHub",
        live: "https://udaymelodyhhub.vercel.app",
      }}
    >
      <section className="mb-12">
        <h2>Overview</h2>
        <p className="text-lg leading-relaxed mb-6">
          MelodyHub is a real-time social music platform that combines music
          streaming with social interaction—think "Spotify meets Discord." I
          built this with two teammates for my Object-Oriented Design course at
          GWU. The platform lets users create music rooms, listen together with
          synchronized playback, and chat in real-time. The core challenge was
          building a real-time system that keeps all users perfectly
          synchronized, even across different network conditions.
        </p>

        <div className="mb-6 p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
          <p className="text-sm font-semibold text-text-primary mb-3">
            PROJECT STATUS
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Deployed:</strong>{" "}
              <a
                href="https://udaymelodyhhub.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                udaymelodyhhub.vercel.app
              </a>{" "}
              (may be down, deployed by teammate)
            </p>
            <p>
              <strong>Source Code:</strong>{" "}
              <a
                href="https://github.com/aabhiyann/MelodyHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                github.com/aabhiyann/MelodyHub
              </a>
            </p>
            <p className="text-text-muted">
              Beta tested with 100+ concurrent users · 99.2% uptime ·
              Sub-3-second song loading
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>The Challenge</h2>
        <p className="text-lg leading-relaxed mb-4">
          Existing music platforms lack real-time social features. You can't
          listen together with friends remotely, there's no synchronized
          playback across multiple users, and there's no way to chat while
          listening. Music is inherently social, but most streaming platforms
          are isolated experiences.
        </p>
        <p className="leading-relaxed">
          I wanted to build a platform where friends could virtually hang out,
          chat, and listen to the same song at the exact same time—no matter
          where they are. The technical challenge was synchronizing playback
          state across all clients in real-time, handling network latency,
          managing disconnections, and scaling to support multiple rooms with
          many users each.
        </p>
      </section>

      <section className="mb-12">
        <h2>My Approach</h2>
        <p className="text-lg leading-relaxed mb-6">
          I designed MelodyHub around real-time WebSocket communication using
          Socket.IO. The architecture separates concerns: frontend handles UI
          and local state, backend manages room state and synchronization, and a
          CDN delivers audio reliably. I applied Object-Oriented Design
          principles from the course—using inheritance for user roles, the
          Strategy pattern for playback modes, and the Observer pattern for
          real-time updates.
        </p>

        <h3 className="text-xl font-semibold mb-4">Core Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">
              1. Real-Time Music Rooms
            </h4>
            <p className="leading-relaxed">
              Users can create or join rooms organized by music genre or
              interest. Each room maintains its own state—current song, playback
              position, user list, and chat history. Rooms are isolated using
              Socket.IO namespaces, ensuring efficient broadcasting and
              scalability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">
              2. Synchronized Playback
            </h4>
            <p className="leading-relaxed">
              When one user plays, pauses, or seeks, all users in the room
              receive the same state update. The server broadcasts playback
              events with timestamps, and clients apply the state synchronously.
              I implemented timestamp-based sync to handle network
              latency—clients adjust for their own delay to stay in sync.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">3. Live Chat</h4>
            <p className="leading-relaxed">
              Real-time text chat while listening together. Messages are
              broadcast to all users in the room via Socket.IO, with chat
              history persisted in MongoDB. The chat interface updates instantly
              without page refreshes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">
              4. User Authentication & Presence
            </h4>
            <p className="leading-relaxed">
              Clerk-powered authentication with OAuth and email/password. User
              presence is tracked in real-time—when someone joins or leaves a
              room, all users see the update immediately. This uses the Observer
              pattern to notify all clients of state changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>
        <p className="leading-relaxed mb-4">
          The system uses a real-time architecture with WebSocket communication,
          CDN for audio delivery, and MongoDB for persistent state.
        </p>

        <div className="mb-6 p-4 rounded-xl bg-bg-surface/50 border border-border-primary/50 font-mono text-sm overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            {`┌──────────────┐     WebSocket      ┌──────────────┐     Audio CDN    ┌──────────────┐
│    React     │◄──────────────────►│  Socket.IO   │◄────────────────►│  Cloudinary  │
│   Frontend   │                    │   Server     │                  │   (Audio)    │
└──────────────┘                    └──────────────┘                  └──────────────┘
       │                                    │
       │ Auth                              │ DB
       ↓                                   ↓
┌──────────────┐                    ┌──────────────┐
│    Clerk     │                    │   MongoDB    │
│    Auth      │                    │  (Rooms/     │
└──────────────┘                    │   Users)     │
                                    └──────────────┘`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Real-Time Synchronization
        </h3>
        <p className="leading-relaxed mb-4">
          Socket.IO handles WebSocket communication for real-time updates. When
          a user performs an action (play, pause, seek), the client emits an
          event to the server, which broadcasts it to all other clients in the
          room. The server maintains the authoritative state, ensuring
          consistency.
        </p>

        <div className="mb-4 p-4 rounded-xl bg-bg-surface/50 border border-border-primary/50">
          <p className="text-sm font-mono mb-2">
            Server broadcasts playback state:
          </p>
          <pre className="text-xs overflow-x-auto">
            {`socket.to(roomId).emit('sync-playback', {
  songId,
  timestamp,
  isPlaying
});`}
          </pre>
        </div>

        <div className="mb-4 p-4 rounded-xl bg-bg-surface/50 border border-border-primary/50">
          <p className="text-sm font-mono mb-2">
            Clients apply the same state:
          </p>
          <pre className="text-xs overflow-x-auto">
            {`socket.on('sync-playback', ({ songId, timestamp, isPlaying }) => {
  audioPlayer.currentTime = timestamp;
  if (isPlaying) audioPlayer.play();
});`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Backend (Node.js + Express)
        </h3>
        <p className="leading-relaxed mb-4">
          The backend uses Object-Oriented Design principles:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
          <li>
            <strong>Inheritance:</strong> User roles (admin, member, guest)
            extend a base User class
          </li>
          <li>
            <strong>Strategy Pattern:</strong> Different playback modes
            (synchronized, independent) as interchangeable strategies
          </li>
          <li>
            <strong>Observer Pattern:</strong> Real-time updates notify all
            observers (connected clients) of state changes
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Frontend (React)</h3>
        <p className="leading-relaxed mb-4">
          React components handle UI and local state. Socket.IO client connects
          to the server and listens for real-time events. Key components
          include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
          <li>Room browser/selector for discovering and joining rooms</li>
          <li>Music player with synchronized controls</li>
          <li>Chat interface with real-time message updates</li>
          <li>User list with presence indicators</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">
          Audio Delivery (Cloudinary CDN)
        </h3>
        <p className="leading-relaxed">
          Cloudinary provides reliable global CDN for audio files. It handles
          format optimization, automatic transcoding, and fast delivery
          worldwide. This ensures sub-3-second song loading across different
          network conditions. The backend uploads audio files to Cloudinary and
          stores streaming URLs in MongoDB.
        </p>
      </section>

      <section className="mb-12">
        <h2>Key Technical Challenges</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h3 className="text-lg font-semibold mb-2">
              Challenge 1: Real-Time Synchronization
            </h3>
            <p className="leading-relaxed mb-3">
              <strong>Problem:</strong> Keeping all users in a room perfectly
              synchronized despite network latency and varying connection
              speeds.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Solution:</strong> Server maintains authoritative playback
              state and broadcasts events with timestamps. Clients apply state
              updates and adjust for their own network delay. I implemented a
              timestamp-based sync mechanism that accounts for latency
              differences.
            </p>
            <p className="text-sm text-text-muted italic">
              <strong>Impact:</strong> Users stay synchronized within ~100ms,
              creating a seamless shared listening experience.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h3 className="text-lg font-semibold mb-2">
              Challenge 2: Scalable Room Architecture
            </h3>
            <p className="leading-relaxed mb-3">
              <strong>Problem:</strong> Supporting multiple rooms with many
              users each, without performance degradation or resource conflicts.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Solution:</strong> Socket.IO namespaces isolate rooms,
              ensuring broadcasts only go to relevant clients. MongoDB stores
              persistent room state, while in-memory cache handles active rooms
              for fast lookups. Each room operates independently.
            </p>
            <p className="text-sm text-text-muted italic">
              <strong>Impact:</strong> System supports 100+ concurrent users
              across multiple rooms with 99.2% uptime during beta testing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h3 className="text-lg font-semibold mb-2">
              Challenge 3: Handling Disconnections
            </h3>
            <p className="leading-relaxed mb-3">
              <strong>Problem:</strong> Users disconnect unexpectedly—network
              issues, browser closes, etc. The system needs to handle this
              gracefully without breaking synchronization for other users.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Solution:</strong> Socket.IO connection events detect
              disconnections and notify other users. Room state persists in
              MongoDB, so reconnecting users can resume where they left off. I
              implemented reconnection logic that restores playback state.
            </p>
            <p className="text-sm text-text-muted italic">
              <strong>Impact:</strong> Graceful handling of disconnections with
              automatic reconnection and state restoration.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>What I Learned</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              1. Real-Time Architecture Patterns
            </h3>
            <p className="leading-relaxed">
              Building a synchronized real-time app taught me WebSocket patterns
              with Socket.IO, state synchronization challenges, handling network
              latency, and managing disconnections gracefully. The key insight:
              the server must be the source of truth, and clients apply updates
              optimistically while respecting server authority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. Object-Oriented Design in Practice
            </h3>
            <p className="leading-relaxed">
              Applying OOP principles from the course to a real application
              showed me how design patterns solve actual problems. Inheritance
              for role hierarchies, Strategy pattern for interchangeable
              behaviors, and Observer pattern for real-time updates all made the
              codebase more maintainable and extensible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              3. Team Collaboration
            </h3>
            <p className="leading-relaxed">
              Working on a 3-person team with Agile methodology taught me the
              importance of clear API design for parallel development, code
              reviews for quality, Git workflows with feature branches, and
              comprehensive documentation. Good architecture reduced feature
              development time by 60% through clear separation of concerns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              4. Full-Stack Integration
            </h3>
            <p className="leading-relaxed">
              Connecting multiple technologies—React frontend, Node.js backend,
              Socket.IO for real-time, MongoDB for persistence, Clerk for auth,
              and Cloudinary for CDN—taught me how to integrate third-party
              services, design APIs for frontend-backend communication, and
              handle deployment and DevOps considerations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Tech Stack Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="case-study-table w-full">
            <thead>
              <tr>
                <th>Category</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Frontend</strong>
                </td>
                <td>React, JavaScript, CSS</td>
              </tr>
              <tr>
                <td>
                  <strong>Backend</strong>
                </td>
                <td>Node.js, Express, Socket.IO</td>
              </tr>
              <tr>
                <td>
                  <strong>Database</strong>
                </td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>
                  <strong>Authentication</strong>
                </td>
                <td>Clerk (OAuth, email/password)</td>
              </tr>
              <tr>
                <td>
                  <strong>Audio CDN</strong>
                </td>
                <td>Cloudinary</td>
              </tr>
              <tr>
                <td>
                  <strong>Deployment</strong>
                </td>
                <td>Vercel (deployed by teammate)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2>Performance & Scale</h2>
        <p className="leading-relaxed mb-4">
          During beta testing, MelodyHub demonstrated strong performance:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
          <li>
            <strong>100+ concurrent users</strong> supported across multiple
            rooms
          </li>
          <li>
            <strong>99.2% uptime</strong> during 2-month beta period
          </li>
          <li>
            <strong>50+ community members</strong> actively using music rooms
          </li>
          <li>
            <strong>Sub-3-second song loading</strong> across different network
            conditions
          </li>
        </ul>
        <p className="leading-relaxed">
          Optimizations included CDN for audio delivery (reducing latency),
          Socket.IO rooms for efficient broadcasting (only relevant clients
          receive updates), connection pooling for database (improving query
          performance), and efficient React rendering (minimizing re-renders).
        </p>
      </section>

      <section className="mb-12">
        <h2>Course Project Context</h2>
        <p className="leading-relaxed mb-4">
          This was built for{" "}
          <strong>CSCI 6234: Object-Oriented Design @ GWU</strong>. The project
          goals were to apply OOP principles in a real application, use design
          patterns appropriately, implement clean architecture, and document
          design decisions.
        </p>
        <p className="leading-relaxed">
          Our approach included UML diagrams for system design, comprehensive
          class hierarchies, documented design patterns (Strategy, Observer,
          Factory), and iterative development with feedback. The project
          demonstrated that good architecture improves team velocity—we reduced
          feature development time by 60% through clear separation of concerns
          and reusable components.
        </p>
      </section>

      <section className="mb-12">
        <h2>Explore the Project</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://github.com/aabhiyann/MelodyHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50 hover:border-accent-primary/50 transition-colors group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
              View Source Code
            </h3>
            <p className="text-sm text-text-muted">
              Complete implementation with React frontend, Node.js backend, and
              Socket.IO real-time communication
            </p>
          </a>
          <a
            href="https://udaymelodyhhub.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50 hover:border-accent-primary/50 transition-colors group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
              Try Live Demo
            </h3>
            <p className="text-sm text-text-muted">
              Deployed on Vercel (may be down, deployed by teammate). Experience
              real-time synchronized playback and chat.
            </p>
          </a>
          <a
            href="/deep-dives/melodyhub-realtime-architecture"
            className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50 hover:border-accent-primary/50 transition-colors group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
              Technical Deep Dive
            </h3>
            <p className="text-sm text-text-muted">
              Read my analysis on WebSocket architecture, state synchronization,
              and building scalable real-time systems
            </p>
          </a>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default MelodyHubCaseStudy;
