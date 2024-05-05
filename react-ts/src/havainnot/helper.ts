import { OriginalHavaintoData } from '../types/OriginalHavaintoData';
import { TransformedHavaintoData } from '../types/TransformedHavaintoData';

export const convertData = (data: OriginalHavaintoData[]): TransformedHavaintoData[] => {
    return data.map(entry => ({
        scientificName: entry.unit.linkings.taxon.scientificName,
        vernacularName: entry.unit.linkings.taxon.vernacularName?.fi,
        displayDateTime: entry.gathering.displayDateTime?.split("[")[0].trim(),
        municipalityDisplayname: entry.gathering.interpretations?.municipalityDisplayname,
        locality: entry.gathering.locality,
        team: entry.gathering.team ? entry.gathering.team : []
    }));
};