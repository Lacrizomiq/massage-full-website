import { GiWeightLiftingUp } from "react-icons/gi";

import { IoMdCheckmark } from "react-icons/io";

import { Link } from "react-router-dom";

const Renforcement = () => {
  return (
    <div className="flex flex-col min-w-[350px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="flex items-center justify-center mb-2 text-xl font-bold">
          <GiWeightLiftingUp />{" "}
          <p className="ml-4">Renforcement musculaire et massage</p>
        </div>
        <p className="flex-grow text-base text-gray-700">
          Coaching personnalisé à base de renforcement musculaire, d'exercices
          de mobilité et de massages.
        </p>
        <p className="flex-grow mt-4 mb-2 text-base text-gray-700">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Séances de renforcement musculaire</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Amélioration de la posture</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">
                Vous êtes guidés à travers chaque exercices
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">
                Pédagogie afin de vous rendre autonome pour la suite
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Sessions de massage régénérantes incluses</p>
            </li>
          </ul>
        </p>
      </div>
      <div className="flex pt-4 pb-2 mt-auto">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          1 mois
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-blue-700 bg-blue-200 rounded-full">
          400 €
        </span>
        <div>
          <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-blue-700 bg-blue-200 rounded-full">
            <Link to="/coaching-massage">En savoir plus !</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Renforcement;
