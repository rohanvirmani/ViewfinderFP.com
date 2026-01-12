export interface FilmProject {
  slug: string;
  title: string;
  about: string;
  images: string[];
  director: string;
  language: string;
  producers: string;
  writer: string;
  runningTime: string;
  genre: string;
  productionCompany: string;
  productionCountry: string;
  cinematographer: string;
  editor: string;
  music: string;
  cast: string;
  dialogue: string;
  festivals: string[];
  
  // Optional fields
  coproducers?: string;
  artDirector?: string;
  associateDirector?: string;
  starring?: string;
  releaseDate?: string;
  certification?: string;
  asstCinematographer?: string;
  costumeDesigner?: string;
  singers?: string;
  sfx?: string;
  productionDesigner?: string;
  makeupHair?: string;
  soundDesigner?: string;
  studio?: string;
  cameraUnit?: string;
  DI?: string;
  posterDesign?: string;
  releasePartner?: string;
  lyricist?: string;
  soundMixing?: string;
  syncSound?: string;
  syncrecorder?: string;
  colorist?: string;
  photographer?: string;
  postproductionManager?: string;
  productionAssistant?: string;
  filmlink?: string;
}

export type FilmProjectArray = FilmProject[];

// Field metadata configuration
export const REQUIRED_FIELDS = [
  'director',
  'producers',
  'writer',
  'cast',
  'cinematographer',
  'music',
  'dialogue',
  'productionCompany',
  'productionCountry',
  'genre',
  'runningTime',
  'festivals'
] as const;

export const OPTIONAL_FIELDS = [
  'coproducers',
  'editor',
  'artDirector',
  'associateDirector',
  'asstCinematographer',
  'productionAssistant',
  'lyricist',
  'cameraUnit',
  'sfx',
  'DI',
  'soundDesigner',
  'soundMixing',
  'syncSound',
  'syncrecorder',
  'photographer',
  'costumeDesigner',
  'makeupHair',
  'singers',
  'studio',
  'productionDesigner',
  'releasePartner',
  'colorist',
  'postproductionManager'
] as const;

export const FIELD_NAMES: Record<string, string> = {
  director: 'Director',
  producers: 'Producer(s)',
  writer: 'Writer',
  cast: 'Cast',
  cinematographer: 'Cinematographer',
  asstCinematographer: 'Asst. Cinematographer',
  editor: 'Editor',
  music: 'Music Director',
  artDirector: 'Art Director',
  associateDirector: 'Asst. Director',
  dialogue: 'Dialogue',
  productionCompany: 'Production Company',
  productionCountry: 'Production Country',
  genre: 'Genre',
  runningTime: 'Length',
  festivals: 'Festivals & Awards',
  coproducers: 'Co-Producer(s)',
  productionAssistant: 'Production Assistant',
  lyricist: 'Lyricist',
  cameraUnit: 'Camera Unit',
  sfx: 'SFX',
  DI: 'DI',
  soundDesigner: 'Sound Design',
  soundMixing: 'Sound Mixing',
  syncSound: 'Sync Sound',
  syncrecorder: 'Sync Dialogue Recorder',
  photographer: 'Stills Photographer',
  costumeDesigner: 'Costume Designer',
  makeupHair: 'Makeup and Hair',
  singers: 'Singers',
  studio: 'Studio',
  productionDesigner: 'Production Designer',
  releasePartner: 'Release Partner',
  colorist: 'Colorist',
  postproductionManager: 'Post Production Manager'
} as const;

// Helper function to get display name for a field
export const getFieldName = (fieldKey: string): string => {
  return FIELD_NAMES[fieldKey] || fieldKey;
};

// Helper function to check if field is required
export const isRequiredField = (fieldKey: string): boolean => {
  return REQUIRED_FIELDS.includes(fieldKey as any);
};

// Helper function to check if field is optional
export const isOptionalField = (fieldKey: string): boolean => {
  return OPTIONAL_FIELDS.includes(fieldKey as any);
};

// Helper function to check if field has a value
export const hasFieldValue = (value: any): boolean => {
  return value !== undefined && value !== null && value !== '';
};