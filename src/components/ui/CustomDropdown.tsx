import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find(opt => opt.value === value) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <label className="block text-xs uppercase tracking-wider mb-2 font-light text-white/80">
        {label}
      </label>
      
      <motion.button
        type="button"
        className="w-full bg-transparent border-b border-white/30 py-3 px-0 text-left text-white focus:border-primary outline-none transition-all duration-300 group relative"
        onClick={toggleDropdown}
        whileHover={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}
        whileFocus={{ borderColor: 'var(--primary)' }}
      >
        <span className={`block truncate ${selectedOption ? 'text-white' : 'text-white/60'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 group-hover:text-white/80 transition-colors duration-300"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 z-50 mt-1"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden">
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    className={`w-full px-4 py-3 text-left text-gray-800 hover:bg-primary/10 hover:text-primary transition-all duration-200 ${
                      selectedOption?.value === option.value ? 'bg-primary/20 text-primary' : ''
                    }`}
                    onClick={() => handleSelect(option)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                    whileHover={{ backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                  >
                    <span className="block truncate">{option.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown; 