export interface ITitles {
  _id?: string;
  Awards: IAwards[];
  Genres: string[];
  OtherNames: IOtherNames[];
  Participants: IParticipants[];
  ReleaseYear: number;
  Storylines: IStorylines[];
  TitleName: string;
}
export interface IAwards {
  AwardWon: boolean;
  AwardYear: number;
  Participants: string[];
  Award: string;
  AwardCompany: string;
}

export interface IOtherNames {
  TitleNameLanguage: string;
  TitleNameType: string;
  TitleNameSortable: string;
  TitleName: string;
}

export interface IParticipants {
  IsKey: boolean;
  RoleType: string;
  IsOnScreen: boolean;
  ParticipantType: string;
  Name: string;
  ParticipantId: number;
}

export interface IStorylines {
  Description: string;
  Language: string;
  Type: string;
}

export interface ITablePaginationWithSearchText {
  skip?: number;
  pageSize?: number;
  searchText: string;
}

export interface IGetUserById {
  id: string;
}

export interface IResult {
  payload: ITitles;
  totalRows: number;
}
