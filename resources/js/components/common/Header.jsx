import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ThemeMode from '@/components/ThemeMode';

const Header = () => (
  <header className="sticky top-0 left-0 right-0 z-10 bg-white dark:bg-dark-400 shadow-sm drop-shadow-sm px-4 py-2 h-[70px] flex items-center w-full">
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center uppercase text-white font-bold">
        <Link to="/" className="inline-flex items-center gap-2 text-2xl tracking-wider text-theme font-head">
          <span>QuickPro</span>
        </Link>
      </div>
      <ul className="flex items-center justify-end gap-3">
        <li>
          <ThemeMode />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
