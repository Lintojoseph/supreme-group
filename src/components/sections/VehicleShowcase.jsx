// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Image from 'next/image';

// const sections = [
//   {
//     title: 'Passenger Vehicles',
//     buttons: [
//       { label: 'Complete Body', img: '/Cabin 1.png', video: '/Passenger.mp4' },
//       { label: 'Front', img: '/Cabin2.1.png', video: '/PassengerFront.mp4' },
//       { label: 'Cabin', img: '/Cabin2.png', video: '/PassengerCabin.mp4' },
//       { label: 'Trunk', img: '/Cabin3.png', video: '/TrunkPassenger.mp4' },
//       { label: 'Exterior', img: '/Cabin4.png', video: '/PassengerExterior.mp4' },
//     ],
//   },
//   {
//     title: 'Commercial Vehicles',
//     buttons: [
//       { label: 'Complete Body', img: '/Cabin 1.png', video: '/Commercial.mp4' },
     
//       {  img: '/Cabin2.png', video: '/CommercialCabin.mp4' },
//       {  img: '/Cabin3.png', video: '/CommercialEngine.mp4' },
      
//     ],
//   },
// ];

// export default function VehicleShowcase() {
//   const [selectedVideos, setSelectedVideos] = useState(
//     sections.map((s) => s.buttons[0].video)
//   );
//   const [activeIndex, setActiveIndex] = useState(0);

//   const sectionRefs = useRef([]);

//   // Track scroll position to highlight sidebar
//   useEffect(() => {
//     const handleScroll = () => {
//       sectionRefs.current.forEach((ref, idx) => {
//         if (ref) {
//           const top = ref.getBoundingClientRect().top;
//           const height = ref.offsetHeight;
//           if (top < window.innerHeight / 2 && top + height > window.innerHeight / 2) {
//             setActiveIndex(idx);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSelect = (sectionIndex, videoPath) => {
//     const updated = [...selectedVideos];
//     updated[sectionIndex] = videoPath;
//     setSelectedVideos(updated);
//   };

//   return (
//     <section className="bg-black text-white flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 sticky top-0 flex flex-col items-start pl-6 pt-24 space-y-6">
//         {sections.map((section, idx) => (
//           <span
//             key={idx}
//             className={`text-lg font-medium transition-all ${
//               idx === activeIndex ? 'text-white' : 'text-gray-500'
//             }`}
//           >
//             {section.title}
//           </span>
//         ))}
//       </div>

//       {/* Scrollable Content */}
//       <div className="w-4/5 px-6 space-y-24 py-24">
//         {sections.map((section, idx) => {
//           const ref = useRef(null);
//           sectionRefs.current[idx] = ref.current;

//           const inView = useInView(ref, { once: true });

//           return (
//             <motion.div
//               key={idx}
//               ref={ref}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: idx * 0.2 }}
//               className="space-y-8"
//             >
//               <h2 className="text-3xl font-bold">{section.title}</h2>

//               <video
//                 key={selectedVideos[idx]} // forces re-render when video changes
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="rounded-lg w-full object-cover"
//               >
//                 <source src={selectedVideos[idx]} type="video/mp4" />
//               </video>

//               <div className="flex gap-4 flex-wrap">
//                 {section.buttons.map((btn, btnIdx) => (
//                   <button
//                     key={btnIdx}
//                     className="border border-gray-600 hover:border-white p-1 rounded-lg"
//                     onClick={() => handleSelect(idx, btn.video)}
//                   >
//                     <Image
//                       src={btn.img}
//                       alt={btn.label}
//                       width={80}
//                       height={80}
//                       className="object-contain"
//                     />
//                     <span className="block text-sm mt-1">{btn.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const sections = [
  {
    title: 'Passenger Vehicles',
    buttons: [
      { label: 'Complete Body', img: '/Cabin 1.png', video: '/Passenger.mp4' },
      { label: 'Front', img: '/Cabin2.1.png', video: '/PassengerFront.mp4' },
      { label: 'Cabin', img: '/Cabin2.png', video: '/PassengerCabin.mp4' },
      { label: 'Trunk', img: '/Cabin3.png', video: '/TrunkPassenger.mp4' },
      { label: 'Exterior', img: '/Cabin4.png', video: '/PassengerExterior.mp4' },
    ],
  },
  {
    title: 'Commercial Vehicles',
    buttons: [
      { label: 'Complete Body', img: '/Cabin 1.png', video: '/Commercial.mp4' },
      { label: 'Cabin', img: '/Cabin2.png', video: '/CommercialCabin.mp4' },
      { label: 'Engine', img: '/Cabin3.png', video: '/CommercialEngine.mp4' },
    ],
  },
];

export default function VehicleShowcase() {
  const [selectedVideos, setSelectedVideos] = useState(
    sections.map((s) => s.buttons[0].video)
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          const height = ref.offsetHeight;
          if (top < window.innerHeight / 2 && top + height > window.innerHeight / 2) {
            setActiveIndex(idx);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelect = (sectionIndex, videoPath) => {
    const updated = [...selectedVideos];
    updated[sectionIndex] = videoPath;
    setSelectedVideos(updated);
  };

  return (
    <>
    <section className="bg-black text-white text-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-semibold leading-snug"
      >
        Evolving the drive with{' '}
        <span className="font-bold text-white">360-degree</span>{' '}
        comprehensive solutions
      </motion.h1>
    </section>

    <section className="bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-1/5 sticky top-0 h-screen flex flex-col items-start pl-6 pt-24 space-y-6 border-r border-gray-700">
        {sections.map((section, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: idx === activeIndex ? 1 : 0.4,
              scale: idx === activeIndex ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`text-lg font-medium cursor-pointer`}
            onClick={() => {
              sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {section.title}
          </motion.span>
        ))}
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="w-4/5 px-6 space-y-40 py-24">
        {sections.map((section, idx) => {
          const ref = useRef(null);
          sectionRefs.current[idx] = ref.current;

          const inView = useInView(ref, { amount: 0.3, once: false });

          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 100 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">{section.title}</h2>

              <motion.video
                key={selectedVideos[idx]}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full object-cover shadow-lg"
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <source src={selectedVideos[idx]} type="video/mp4" />
              </motion.video>

              <div className="flex gap-4 flex-wrap">
                {section.buttons.map((btn, btnIdx) => (
                  <button
                    key={btnIdx}
                    className="border border-gray-600 hover:border-white p-1 rounded-lg"
                    onClick={() => handleSelect(idx, btn.video)}
                  >
                    <Image
                      src={btn.img}
                      alt={btn.label || 'Video thumbnail'}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    {btn.label && (
                      <span className="block text-sm mt-1">{btn.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
    </>
  );
}
