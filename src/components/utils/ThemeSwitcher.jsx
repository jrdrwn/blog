import { useRef } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
export default function ThemeSwitcher() {
  const btnRef = useRef(null);
  const themeSwitcher = useThemeSwitcher(btnRef, {
    light: 'cmyk',
    dark: 'dracula',
  });
  return (
    <div
      ref={btnRef}
      className="swap-rotate mask swap mask-circle absolute top-0 right-0 mr-2 bg-primary p-1 text-primary-content shadow-lg"
      onClick={themeSwitcher}
    >
      <MdOutlineDarkMode size={24} className="swap-off" />
      <MdOutlineLightMode size={24} className="swap-on" />
    </div>
  );
}
