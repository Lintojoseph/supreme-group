import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#dff1ff] text-black px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-1">
            <Image src="/logo/Supreme_logos (3)@2x.png" alt="Supreme Group" width={150} height={50} />
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-semibold mb-3">APPLICATIONS</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Nonwoven</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Who We Are</li>
              <li>Global Competency</li>
              <li>Innovation</li>
              <li>ESG Impact</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-3">MORE</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-3">FOLLOW US</h4>
            <ul className="space-y-2 text-gray-700">
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 border-t border-gray-300 pt-6">
          <span>©2024. All Rights Reserved.</span>
          <span>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</span>
        </div>
      </div>
    </footer>
  );
}
