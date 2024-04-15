import { TbYoga } from "react-icons/tb";

import { IoMdCheckmark } from "react-icons/io";

const MobiliteMassage = () => {
  return (
    <div className="flex flex-col min-w-[350px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="flex items-center justify-center mb-2 text-xl font-bold">
          <TbYoga /> <p className="ml-4">Mobilité du corps et massage</p>
        </div>
        <p className="flex-grow text-base text-gray-700">
          Travail autour de l'amélioration de votre mobilité suivi d'un massage
          bien-être.
        </p>
        <p className="flex-grow mt-4 text-base text-gray-700">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Echange préalable au massage</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Repérage des tensions musculaires</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Préparation du corps au massage</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Sessions personnalisées</p>
            </li>
          </ul>
        </p>
      </div>
      <div className="flex pt-4 pb-2 mt-auto">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          1h30
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-blue-700 bg-blue-200 rounded-full">
          80 €
        </span>
        <div>
          <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-blue-700 bg-blue-200 rounded-full">
            En savoir plus !
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobiliteMassage;
