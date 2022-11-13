import { useState, useEffect } from 'react';
import axios from "axios";



export default function useMunicipio(IDProvincia : string) {
    type STATIONJSON = {
        IDStation: string;
        Station: string;
    };
    
    const [STATIONS, setStations] = useState<STATIONJSON[]>([]);
      useEffect(() => {
        const getStations = async () => {
          try {
            const STATIONURL = "	https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/"+IDProvincia;
            const { data } = await axios.get(`${STATIONURL}`);
            const STATIONSJSON: STATIONJSON[] = new Array<STATIONJSON>();
            data.map((STATION: STATIONJSON) => {
              const STATIONJSON: STATIONJSON = {
                IDStation: STATION.IDStation,
                Station: STATION.Station,
              };
              STATIONSJSON.push(STATIONJSON);
            });
            setStations(STATIONSJSON);
          } catch (e) {
            console.error(e);
          }
        };
        getStations();
      }, [IDProvincia]);
    return STATIONS;
}