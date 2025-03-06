import Link from "next/link";
import Image from "next/image";
import React from "react";
import { certificationItems } from "@/data";

const CertificateCard = () => {
  // TODO: Create carousell
  return (
    <div className="bg-[#181818] py-4 rounded-xl flex gap-6 flex-wrap justify-center overflow-hidden">
      {certificationItems.map((certificates, index) => (
        <Link
          key={index}
          href={`files/certificates/${certificates.filePath}`}
          target="_blank"
        >
          <Image
            src={`/images/certificates/${certificates.imagePath}`}
            alt="image"
            width={300}
            height={200}
          />
        </Link>
      ))}
    </div>
  );
};

export default CertificateCard;
