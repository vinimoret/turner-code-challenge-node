import gql from 'graphql-tag';

export const GET_TITLES = gql`
  query titles($skip: Int!, $pageSize: Int!, $searchText: String) {
    titles(skip: $skip, pageSize: $pageSize, searchText: $searchText) {
      totalRows
      payload {
        _id
        TitleName
        Awards {
          AwardWon
          AwardYear
          Participants
          Award
          AwardCompany
        }
        Genres
        OtherNames {
          TitleNameLanguage
          TitleNameType
          TitleNameSortable
          TitleName
        }
        Participants {
          Name
        }
        ReleaseYear
        Storylines {
          Description
          Language
          Type
        }
      }
    }
  }
`;

export const GET_TITLES_BY_ID = gql`
  query titleById($id: String!) {
    titleById(id: $id) {
      _id
      TitleName
      Awards {
        AwardWon
        AwardYear
        Participants
        Award
        AwardCompany
      }
      Genres
      OtherNames {
        TitleNameLanguage
        TitleNameType
        TitleNameSortable
        TitleName
      }
      Participants {
        Name
        RoleType
      }
      ReleaseYear
      Storylines {
        Description
        Language
        Type
      }
    }
  }
`;
