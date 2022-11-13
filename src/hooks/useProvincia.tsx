import { useState, useEffect } from 'react';
import axios from "axios";



export default function useProvincia(IDCCAA : string) {
    type PROVINCIAJSON = {
        IDPovincia: string;
        Provincia: string;
    };
    
    const [PROVINCIAS, setPROVINCIAS] = useState<PROVINCIAJSON[]>([]);
      useEffect(() => {
        const getProvincias = async () => {
          try {
            const PROVINCIAURL = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/"+IDCCAA;
            const { data } = await axios.get(`${PROVINCIAURL}`);
            const PROVINCIASJSON: PROVINCIAJSON[] = new Array<PROVINCIAJSON>();
            data.map((PROVINCIA: PROVINCIAJSON) => {
              const PROVINCIAJSON: PROVINCIAJSON = {
                IDPovincia: PROVINCIA.IDPovincia,
                Provincia: PROVINCIA.Provincia,
              };
              PROVINCIASJSON.push(PROVINCIAJSON);
            });
            setPROVINCIAS(PROVINCIASJSON);
          } catch (e) {
            console.error(e);
          }
        };
        getProvincias();
      }, [IDCCAA]);
    return PROVINCIAS;
}