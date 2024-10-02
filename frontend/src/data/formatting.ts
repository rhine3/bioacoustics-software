import moment from "moment";
import { type DataEntryType } from "./index";
type DataEntryKey = keyof DataEntryType;



var nameLookup: { [key: string]: string } = {
    "title": "Title",
    "url": "Url",
    "description": "Description",
    "paidOrFree": "Paid or free",
    "codeAvailable": "Code available",
    "licenseWipCategory": "Licence [WIP category]",
    "taxonomicOrSoundTypeSpecializationIfAny": "Taxonomic or sound type specialization, if any",
    "ecosystemSpecializationIfAny": "Ecosystem specialization, if any",
    "specificHardware": "Specific Hardware",
    "type": "Type",
    "dataExploration": "Data exploration",
    "organization": "Organization",
    "annotation": "Annotation",
    "soundProcessingFeatures": "Sound processing features",
    "acousticParameterMeasurement": "Acoustic parameter measurement",
    "localization": "Localization",
    "detectorFeatures": "Detector features",
    "classifierFeatures": "Classifier features",
    "metadataStandardWipCategory": "Metadata standard [WIP category]",
    "toBeRemovedWipCategory": "To be removed [WIP category]",
    "comments": "Comments"
};

function formatDate(entry: DataEntryType, key: string) {
    var value = entry[key as DataEntryKey];
    if (!value) {
        return "";
    }
    return moment(String(value)).format('YYYY-MM-DD')
}

// The point of this function is to return a standardized link.
// The thing was that there were more than one entry that needed a link, and so 
// it was not that nice to have multiple link templates essentially doing the same thing.
function createLink(href: string | undefined, text: string | undefined) {
    return `<a target="_blank" class="underline text-blue-800" href="${href}">${text}</a>`;
}


// In some cases, we might need to process the data before showing it. (i.e. parse dates)
// In these cases, define the function here, by keying it with the prop name.
var functionLookup: { [key: string]: Function } = {
    // "creators": (entry: DataEntryType, key: string) => {
    //     var data = entry[key as DataEntryKey] as string[];
    //     return data ? (data as string[]).join("; ") : "";
    // },
    "datePublished": formatDate,
    "title": (entry: DataEntryType, key: string) => {
        return createLink(entry["url" as DataEntryKey]?.toString(), entry["title" as DataEntryKey]?.toString())
    },
    // "paperLink": (entry: DataEntryType, key: string) => { return entry["paperLink"] == null ? "" : createLink(entry["paperLink" as DataEntryKey]?.toString(), "paper link"); }
};


var functionKeys = Object.keys(functionLookup);

// Actually returns a string!
function getData(entry: DataEntryType, key: string): any {
    if (!entry) {
        return "";
    }

    var propData = entry[key as DataEntryKey];
    if (functionKeys.includes(key)) {
        propData = functionLookup[key](entry, key);
    }
    return propData;
}

export { functionKeys, functionLookup, getData, nameLookup };

