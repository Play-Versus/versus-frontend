import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => (
  <footer className="bg-white py-12 text-text-primary">
    <div className="container mx-auto px-6 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <div className="mb-2 text-2xl font-bold">
            <Image
              src="/images/logo/Logo_Black.png"
              alt="Logo"
              width={120}
              height={24}
            />
          </div>
          <div id="social-links" className="flex flex-row gap-2 mt-4">
            <a id="instagram" href="https://www.instagram.com/play_versus?utm_source=qr">
              <RiInstagramLine className="h-8 w-8 " />
            </a>
            <a id="facebook" href="">
              <TiSocialFacebookCircular className="h-8 w-8 " />
            </a>
            <a id="linked-in" href="">
              <AiOutlineLinkedin className="h-8 w-8 " />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 text-left md:text-end">
          © 2026 PlayVersus™. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
