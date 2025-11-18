import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Card {
  id: number;
  tag: string;
  title: string;
  width: number;
  height: number;
  x: number;
  y: number;
  image: string;
  connections: number[];
  link?: string;
  description?: string;
}

interface DraggableCardsProps {
  cards: Card[];
  // eslint-disable-next-line no-unused-vars
  onCardMove?: (cardId: number, x: number, y: number) => void;
  isMobile?: boolean;
}

const DraggableCards: React.FC<DraggableCardsProps> = ({
  cards,
  onCardMove,
  isMobile = false,
}) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });

  const handleDragStart = () => {
    setIsDragging(true);
    setDragDelta({ x: 0, y: 0 });
  };

  const handleDrag = (
    cardId: number,
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { delta: { x: number; y: number } }
  ) => {
    if (isMobile) return; // Disable dragging on mobile

    // Track total drag distance
    setDragDelta({ x: info.delta.x, y: info.delta.y });

    const card = cards.find((c) => c.id === cardId);
    if (card) {
      const newX = card.x + info.delta.x;
      const newY = card.y + info.delta.y;
      onCardMove?.(cardId, newX, newY);
    }
  };

  const handleDragEnd = () => {
    // Small delay to prevent accidental link clicks after drag
    setTimeout(() => {
      setIsDragging(false);
      setDragDelta({ x: 0, y: 0 });
    }, 100);
  };

  const handleCardClick = (card: Card) => {
    // Only navigate if we didn't drag (or dragged very little)
    const dragDistance = Math.sqrt(
      dragDelta.x * dragDelta.x + dragDelta.y * dragDelta.y
    );

    if (card.link && dragDistance < 10 && !isDragging) {
      navigate(card.link);
    }
  };

  if (cards.length === 0) return null;

  return (
    <>
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute ${
            isMobile ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"
          }`}
          style={{
            left: card.x,
            top: card.y,
            width: card.width,
            zIndex: 20,
          }}
          drag={!isMobile}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={(e, info) => handleDrag(card.id, e, info)}
          onDragEnd={handleDragEnd}
          onClick={() => handleCardClick(card)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 pointer-events-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {card.tag}
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-250 hover:border-white/20 pointer-events-none"
            style={{
              height: card.height,
              background: "#0a0a0a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-250"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <div className="text-white text-sm sm:text-base font-semibold tracking-tight mb-1">
                {card.title}
              </div>
              {card.description && (
                <div className="text-white/70 text-xs sm:text-sm">
                  {card.description}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default DraggableCards;
