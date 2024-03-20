import {
  StaticImageData,
  StaticImport
} from 'next/dist/shared/lib/get-img-props';

export interface ChampionType {
  championName: string;
  championImage: string | StaticImport;
  championGoodAgainst: { name: string; image: StaticImageData }[];
  championWeakAgainst: { name: string; image: StaticImageData }[];
  championSynergy: { name: string; image: StaticImageData }[];
}

export type ChampionModalType = Omit<
  ChampionType,
  'championName' | 'championImage'
>;

export type ChampionInfoType = Pick<
  ChampionType,
  'championName' | 'championImage'
>;
