import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useClickStatsContext } from '../contexts/ClickStatsProvider';

const LikeButton = ({ 
  wallpaperId, 
  size = 'medium',
  showCount = true,
  className = '' 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 安全获取Context
  let toggleLike, isLiked, getLikeCount;
  try {
    const context = useClickStatsContext();
    toggleLike = context.toggleLike;
    isLiked = context.isLiked;
    getLikeCount = context.getLikeCount;
  } catch (error) {
    console.error('LikeButton Context Error:', error);
    return <div>Error loading like button</div>;
  }
  
  // 安全获取状态
  let isLikedState = false;
  let likeCount = 0;
  
  try {
    isLikedState = isLiked ? isLiked(wallpaperId) : false;
    likeCount = getLikeCount ? getLikeCount(wallpaperId) : 0;
  } catch (error) {
    console.error('LikeButton State Error:', error);
  }

  const handleLikeClick = useCallback(async (e) => {
    e.stopPropagation();
    
    try {
      console.log('LikeButton clicked for wallpaper:', wallpaperId);
      setIsAnimating(true);
      if (toggleLike) {
        const newLikeState = await toggleLike(wallpaperId);
        console.log('Toggle like result:', newLikeState);
      } else {
        console.error('toggleLike function not available');
      }
      setTimeout(() => setIsAnimating(false), 300);
    } catch (error) {
      console.error('LikeButton Click Error:', error);
      setIsAnimating(false);
    }
  }, [wallpaperId, toggleLike]);

  const sizeClasses = {
    small: 'w-4 h-4 text-sm',
    medium: 'w-8 h-8 text-base',
    large: 'w-10 h-10 text-lg'
  };

  return (
    <motion.button
      onClick={handleLikeClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md
        transition-all duration-200 border
        ${isLikedState 
          ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={isAnimating ? { 
          scale: [1, 1.3, 1],
          rotate: [0, 15, -15, 0]
        } : {}}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          className={`${sizeClasses[size]} ${isLikedState ? 'fill-current' : ''}`}
        />
      </motion.div>
      
      {showCount && likeCount > 0 && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-medium"
        >
          {likeCount}
        </motion.span>
      )}
    </motion.button>
  );
};

export default LikeButton;
