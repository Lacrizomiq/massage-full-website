import { TbMassage } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";

const MassageSportif = () => {
  return (
    <div className="flex flex-col min-w-[350px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="flex items-center justify-center mb-2 text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
          <TbMassage /> <p className="ml-4">Massage sportif</p>
        </div>
        <p className="flex-grow tracking-tighter text-left text-gray-700 font-regular">
          Massage sportif pour améliorer votre condition physique et votre
          récupération.
        </p>
        <p className="flex-grow mt-4 text-base text-gray-700">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3 tracking-tighter text-left text-gray-700 font-regular">
                Echange préalable au massage
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3 tracking-tighter text-left text-gray-700 font-regular">
                Massage sportif
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3 tracking-tighter text-left text-gray-700 font-regular">
                Utilisation d'huile relaxante
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="flex pt-4 pb-2 mt-auto">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold tracking-tighter text-left text-gray-700 bg-gray-200 rounded-full font-regular">
          60 min
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold tracking-tighter text-left text-blue-700 bg-blue-200 rounded-full font-regular">
          60 €
        </span>
        <div>
          <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold tracking-tighter text-left text-blue-700 bg-blue-200 rounded-full font-regular">
            En savoir plus !
          </span>
        </div>
      </div>
    </div>
  );
};

export default MassageSportif;
