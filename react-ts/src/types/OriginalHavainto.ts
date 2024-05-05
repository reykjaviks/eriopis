// todo: tarkista mitkä propertyt on pakollisia ja mitkä ei
export interface OriginalHavaintoData {
    unit: {
        abundanceString?: string,
        linkings: {
            taxon: {
                id: string,
                scientificName: string;
                vernacularName: {
                    fi?: string;
                    sv?: string;
                };
            };
        };
        recordBasis?: string;
        taxonVerbatim?: string;
        unitId?: string;
    };
    gathering: {
        conversions?: {
            wgs84CenterPoint?: {
                lat?: number,
                lon?: number
            }
        }
        displayDateTime?: string;
        gatheringId?: string;
        interpretations?: {
            coordinateAccuracy?: number,
            municipalityDisplayname?: string;
            sourceOfCoordinates?: string;
        };
        locality?: string;
        team?: string[];
    };
    document: {
        collectionId: string;
        documentId?: string;
        licenseId?: string;
        secureLevel?: string;
        sourceId?: string;
    };
}