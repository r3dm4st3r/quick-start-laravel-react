import { Icon } from '@iconify/react';

const Footer = () => (
  <footer className="sticky top-0 left-0 right-0 dark:bg-dark-400 bg-white shadow drop-shadow-sm px-4 py-3">
    <nav className="w-full text-black dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span>Made with</span>{' '}
          <span className="text-red-500">
            <Icon icon="mdi:cards-heart" />
          </span>{' '}
          <span>by r3dm4st3r</span>
        </div>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
  </footer>
);

export default Footer;
