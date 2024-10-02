

interface DataEntry {
    title: string;
    url: string;
    description: string;
    paidOrFree: string;
    codeAvailable: string;
    licenseWipCategory: string;
    taxonomicOrSoundTypeSpecializationIfAny: string | null;
    ecosystemSpecializationIfAny: string | null;
    specificHardware: string | null;
    type: string;
    dataExploration: string | null;
    organization: string | null;
    annotation: string | null;
    soundProcessingFeatures: string | null;
    acousticParameterMeasurement: string | null;
    localization: string | null;
    detectorFeatures: string | null;
    classifierFeatures: string | null;
    metadataStandardWipCategory: string | null;
    toBeRemovedWipCategory: string | null;  // Added based on the JSON structure
    comments: string | null;
}

export type { DataEntry as DataEntryType };

const files = (import.meta.glob('../../../datasets_json/*.json', { eager: true }) as unknown) as DataEntry[];
var objects: DataEntry[] = [];
for (let key in files) {
    objects.push(files[key]);
}

export default objects;