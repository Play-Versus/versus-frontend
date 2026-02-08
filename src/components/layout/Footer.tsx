import Image from 'next/image';
import { RiInstagramLine } from 'react-icons/ri';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => (
  <footer className="text-text-primary bg-white py-8">
    <div className="container mx-auto px-6 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="-mt-8 mb-4 text-2xl font-bold">
            <Image
              src="https://assets.playversus.in/media/logos/versus-logo-assets-black/android-chrome-192x192.png"
              alt="Logo"
              width={120}
              height={24}
            />
          </div>
          <div id="social-links" className="-mt-8 flex flex-row gap-2">
            <a
              id="instagram"
              href="https://www.instagram.com/play_versus?utm_source=qr"
            >
              <RiInstagramLine className="h-8 w-8" />
            </a>
            <a id="facebook" href="">
              <TiSocialFacebookCircular className="h-8 w-8" />
            </a>
            <a id="linked-in" href="">
              <AiOutlineLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-left text-gray-600 md:text-end">
            © 2026 PlayVersus™. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
