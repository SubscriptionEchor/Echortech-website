import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  isVisible: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

const VideoCard: React.FC<VideoCardProps> = ({ title, videoUrl, isVisible, onClose, position }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            zIndex: 50,
            maxWidth: '300px',
            maxHeight: 'calc(100vh - 40px)', // 20px padding top and bottom
          }}
          className="w-[300px] bg-gray-900/95 rounded-xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-sm"
        >
          <div className="relative aspect-[3/4]">
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={onClose}
                className="p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoCard;