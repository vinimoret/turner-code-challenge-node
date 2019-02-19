import { queries } from './queries';
import { dateResolver } from './scalars/date';

export default {
  Query: queries,
  Date: dateResolver.Date,
  // EpochDate: dateResolver.EpochDate,
};
