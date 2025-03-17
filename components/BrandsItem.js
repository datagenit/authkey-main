"use client";
import Marquee from "react-marquee-slider";
import { motion } from "framer-motion";

const BrandsItem = () => {
  const BrandImages = [
    { src: "/img/home/acc.webp", alt: "Acc" },
    { src: "/img/home/apollo.webp", alt: "Apollo Hospitals" },
    { src: "/img/home/atulaya.webp", alt: "Atulaya Healthcare" },
    { src: "/img/home/ayushman.webp", alt: "Ayushman Hospital" },
    { src: "/img/home/unionbank.webp", alt: "Union Bank" },
    { src: "/img/home/vlcc.webp", alt: "VLCC" },
    { src: "/img/home/WH.webp", alt: "WH Warehouse" },
    { src: "/img/home/indianSpinalInjury.webp", alt: "Indian Spinal Injury" },
    { src: "/img/home/vypar.webp", alt: "Vypar" },
    { src: "/img/home/neodove.webp", alt: "NeoDove" },
    { src: "/img/home/upward.webp", alt: "Upward" },
    { src: "/img/home/physicswallah.webp", alt: "Physics Wallah" },
    { src: "/img/home/mufin.webp", alt: "Mufin Green Finance" },
  ];

  return (
    <div className="BrandItems">
      <Marquee velocity={25} minScale={0.7} resetAfterTries={200} scatterRandomly={false}>
        {BrandImages.map((image, index) => (
          <motion.div
            className="cardinItems BrandItemsImg"
            key={index}
            whileHover={{ scale: 1.1 }}  // Scale up slightly on hover
            transition={{ type: "spring", stiffness: 300 }}  // Smooth spring effect
          >
            <motion.div className="tooltip-containers">
              <motion.img
                className="img-fluid"
                src={image.src}
                alt={image.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
  
            </motion.div>
          </motion.div>
        ))}
      </Marquee>
      

    </div>
  );
};

export default BrandsItem;