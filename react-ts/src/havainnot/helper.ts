import { OriginalHavaintoData } from '../types/OriginalHavainto';
import { TransformedHavaintoData } from '../types/TransformedHavainto';

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