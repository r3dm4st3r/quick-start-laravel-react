import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="py-10 flex items-center justify-center h-full min-h-[calc(100vh-125px)]">
      <div className="container">
        <div className="grid grid-cols-1 items-center">
          <div className="text-center dark:text-white">
            <div className="font-extraBold font-body text-6xl text-shadow tracking-wider flex justify-center items-center gap-3">
              <span>
                <Icon icon="logos:laravel" />
              </span>
              <span>
                <Icon width={30} icon="ic:round-plus" />
              </span>
              <span>
                <Icon icon="logos:vitejs" />
              </span>
              <span>
                <Icon width={30} icon="ic:round-plus" />
              </span>
              <span>
                <Icon icon="logos:react" />
              </span>
              <span>
                <Icon width={30} icon="ic:round-plus" />
              </span>
              <span>
                <Icon icon="logos:redux" />
              </span>
            </div>
            <p className="text-4xl mt-5">Quick starter boilerplate (Javascript)</p>
            <div className="mt-16">
              <a href="https://github.com/r3dm4st3r/quick-start-laravel-react.git" className="btn px-10 py-3 text-lg">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
