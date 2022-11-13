import { useState, useEffect } from 'react';
import axios from "axios";



export default function useMunicipio(IDProvincia : string) {
    type MUNICIPIOJSON = {
        IDMunicipio: string;
        Municipio: string;
    };
    
    const [MUNICIPIOS, setMUNICIPIOS] = useState<MUNICIPIOJSON[]>([]);
      useEffect(() => {
        const getMunicipioss = async () => {
          try {
            const MUNICIPIOURL = "	https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/"+IDProvincia;
            const { data } = await axios.get(`${MUNICIPIOURL}`);
            const MUNICIPIOSJSON: MUNICIPIOJSON[] = new Array<MUNICIPIOJSON>();
            data.map((MUNICIPIO: MUNICIPIOJSON) => {
              const MUNICIPIOJSON: MUNICIPIOJSON = {
                IDMunicipio: MUNICIPIO.IDMunicipio,
                Municipio: MUNICIPIO.Municipio,
              };
              MUNICIPIOSJSON.push(MUNICIPIOJSON);
            });
            setMUNICIPIOS(MUNICIPIOSJSON);
          } catch (e) {
            console.error(e);
          }
        };
        getMunicipioss();
      }, [IDProvincia]);
    return MUNICIPIOS;
}