import { Context } from '@/helpers/interfaces';
import { ITablePaginationWithSearchText, IResult, IGetUserById } from '@/interfaces/titles';

export default {
  async titles(_parent: any, args: ITablePaginationWithSearchText, { db, req }: Context): Promise<any> {
    const { skip, pageSize, searchText } = args;
    let result: Promise<any>;
    let titleToRegex = new RegExp(searchText, 'i');

    result = new Promise(function(resolve, reject) {
      db.once('open', async () => {
        const totalRows: number = await db.collection('Titles').countDocuments();
        db.collection('Titles')
          .find({ TitleName: titleToRegex })
          .limit(pageSize)
          .skip(skip)
          .toArray()
          .then(res => {
            resolve({ payload: res, totalRows });
          });
      });
    });

    const res = await result;
    return res;
  },
  async titleById(_parent: any, args: IGetUserById, { db, req }: Context): Promise<any> {
    const { id } = args;
    let result: Promise<any>;

    result = new Promise(function(resolve, reject) {
      db.once('open', async () => {
        db.collection('Titles')
          .findOne({ _id: id })
          .then(res => {
            db.close();
            resolve(res);
          });
      });
    });

    const res = await result;
    return res;
  },
};
