import { OriginalHavaintoData, TransformedHavaintoData } from './interfaces';

export const convertData = (data: OriginalHavaintoData[]): TransformedHavaintoData[] => {
    return data.map(entry => {
        return {
            scientificName: entry.unit.linkings.taxon.scientificName,
            vernacularName: entry.unit.linkings.taxon.vernacularName?.fi,
            displayDateTime: entry.gathering.displayDateTime?.split("[")[0].trim(),
            municipalityDisplayname: entry.gathering.interpretations?.municipalityDisplayname,
            locality: entry.gathering.locality,
            team: entry.gathering.team ? entry.gathering.team : []
        };
    });
};