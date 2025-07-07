import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * 标签翻译Hook - 提供统一的标签翻译功能
 */
export const useTagTranslation = () => {
  const { t, currentLanguage } = useLanguage();

  // 翻译单个标签
  const translateTag = useCallback((tag) => {
    if (!tag || typeof tag !== 'string') return tag;

    try {
      // 尝试获取翻译
      const translationKey = `tagTranslations.${tag}`;
      const translation = t(translationKey);
      
      // 如果翻译存在且不等于key本身，使用翻译
      if (translation && translation !== translationKey) {
        return translation;
      }
      
      // 否则返回原标签
      return tag;
    } catch (error) {
      console.error('Tag translation error:', error);
      return tag;
    }
  }, [t]);

  // 翻译标签数组
  const translateTags = useCallback((tags) => {
    if (!Array.isArray(tags)) return [];
    
    return tags.map(tag => translateTag(tag));
  }, [translateTag]);

  // 获取翻译后的标签显示文本（带#前缀）
  const getTagDisplayText = useCallback((tag) => {
    const translatedTag = translateTag(tag);
    return `#${translatedTag}`;
  }, [translateTag]);

  return {
    translateTag,
    translateTags, 
    getTagDisplayText,
    currentLanguage
  };
}; 