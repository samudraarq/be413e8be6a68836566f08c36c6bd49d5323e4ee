import { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");

  let data = [];

  if (inputText.trim().length >= 3) {
    data = [
      {
        id: 1,
        name: "Kulina",
        address: `Gedung Kulina Lt. 3, Jalan Tulodong Atas No. 28, Senayan, Kebayoran
                    Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia`,
      },
      {
        id: 2,
        name: "Central Park",
        address: `Jl. Letjen S. Parman No.28, RW.6, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470`,
      },
      {
        id: 3,
        name: "Grand Indonesia",
        address: `Jl. M.H. Thamrin No.1, Kb. Melati, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310`,
      },
    ];
  } else {
    data = [];
  }

  return (
    <LocationContext.Provider value={{ setInputText, data }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
