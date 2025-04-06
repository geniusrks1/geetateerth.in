import React from "react";

const sacredPlaces = [
  {
    name: "Ram Janmabhoomi Temple",
    description: "The birthplace of Lord Rama, the most revered site in Ayodhya.",
    imageUrl: "/images/ramjanmbhoomi.jpg",
  },
  {
    name: "Hanuman Garhi",
    description: "A fort-like temple dedicated to Lord Hanuman.",
    imageUrl: "/images/hanumangarhiayodhya.jpeg",
  },
  {
    name: "Kanak Bhavan",
    description: "A temple dedicated to Lord Rama and Goddess Sita.",
    imageUrl: "/images/kanakbhawan.jpeg",
  },
  {
    name: "Treta Ke Thakur",
    description: "A historic temple believed to be built by King Dasharatha.",
    imageUrl: "/images/TretaKeThakur.jpg",
  },
  {
    name: "Guptar Ghat",
    description: "A sacred riverbank where Lord Rama is believed to have taken Jal Samadhi.",
    imageUrl: "/images/guptarghat.jpeg",
  },
  {
    name: "Nageshwarnath Temple",
    description: "An ancient temple dedicated to Lord Shiva.",
    imageUrl: "/images/nageshwarnath.jpeg",
  },
  {
    name: "Valmiki Bhawan",
    description: "Associated with Maharishi Valmiki, the sage who wrote the Ramayana.",
    imageUrl: "/images/ValmikiBhawan.webp",
  },
  {
    name: "Swarg Dwar (Ram Ghat)",
    description: "A sacred bathing ghat associated with the final rites of Lord Rama.",
    imageUrl: "/images/RamGhat.jpg",
  },
  {
    name: "Tulsi Smarak Bhawan",
    description: "A museum dedicated to the poet-saint Tulsidas.",
    imageUrl: "/images/tulsismarak.jpg",
  },
  {
    name: "Gulab Bari (Rose Garden)",
    description: "Houses the tomb of Nawab Shuja-ud-Daula.",
    imageUrl: "/images/gulabbari.jpg",
  },
  {
    name: "Choti Chawni (Mani Parvat)",
    description: "Believed to be a fragment of the Sanjeevani mountain brought by Hanuman.",
    imageUrl: "/images/maniparbat.jpg",
  },
  {
    name: "Dashrath Mahal",
    description: "The royal palace of King Dasharatha, the father of Lord Rama.",
    imageUrl: "/images/dashrathmahal.jpeg",
  },
  {
    name: "Sita Ki Rasoi",
    description: "A sacred kitchen believed to have been used by Goddess Sita after her marriage.",
    imageUrl: "/images/SitakiRasoiAyodhya.jpg",
  },
  {
    name: "Bharat Kund",
    description: "Located in Nandigram, where Bharat ruled Ayodhya in Lord Rama's absence.",
    imageUrl: "/images/bharatkund.jpeg",
  },
  {
    name: "Lakshman Ghat",
    description: "A sacred ghat associated with Lord Lakshman, the younger brother of Lord Rama.",
    imageUrl: "/images/LaxmanGhatAyodhya.jpg",
  },
  {
    name: "Raja Mandir",
    description: "A historic temple with beautiful architecture.",
    imageUrl: "/images/rajamandir.jpg",
  },
  {
    name: "Brahma Kund",
    description: "A holy water reservoir believed to be created by Lord Brahma.",
    imageUrl: "/images/brahmakund.jpeg",
  },
  {
    name: "Vidyakund",
    description: "A sacred pond where young Lord Rama and his brothers received education.",
    imageUrl: "/images/vidyakund.jpg",
  },
  {
    name: "Suraj Kund",
    description: "A historic pond dedicated to the Sun God (Surya Dev).",
    imageUrl: "/images/surajkund.jpeg",
  },
  {
    name: "Bharat Milap Temple",
    description: "Marks the site where Lord Rama and Bharat reunited after 14 years of exile.",
    imageUrl: "/images/bharatmilap.jpeg",
  },
];

const SacredPlaces: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Sacred Places in Ayodhya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sacredPlaces.map((place, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img
              src={place.imageUrl}
              alt={place.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
              <p className="text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SacredPlaces;



