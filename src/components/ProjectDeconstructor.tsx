import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DiagramNode from './ui/DiagramNode';

interface Node {
  id: string;
  label: string;
  position: { x: number; y: number };
}

interface Connection {
  from: string;
  to: string;
}

interface ProjectDeconstructorProps {
  architecture: {
    nodes: Node[];
    connections: Connection[];
  };
  onClose: () => void;
}

const ProjectDeconstructor: React.FC<ProjectDeconstructorProps> = ({ architecture, onClose }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  if (!architecture) return null;

  const { nodes, connections } = architecture;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl h-[600px] bg-light-bg dark:bg-dark-bg rounded-2xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold p-6">Project Architecture</h3>
          <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {connections.map((conn, index) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;

                return (
                  <motion.line
                    key={index}
                    x1={fromNode.position.x + 100} // Adjust for node width
                    y1={fromNode.position.y + 30} // Adjust for node height
                    x2={toNode.position.x + 100}
                    y2={toNode.position.y + 30}
                    stroke={isHighlighted ? 'var(--color-primary-light)' : 'var(--color-light-borderMuted)'}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                );
              })}
            </svg>

            {nodes.map(node => (
              <DiagramNode
                key={node.id}
                label={node.label}
                position={node.position}
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
              />
            ))}
          </div>
          <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDeconstructor;
