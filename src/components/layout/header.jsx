// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm h-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo/Supreme_logos (3)@2x.png" 
              alt="Supreme Group Logo"
              width={140}
              height={40}
            />
            
          </div>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
