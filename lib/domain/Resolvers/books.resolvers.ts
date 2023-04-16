import { BooksService } from "../../infrastructure";
import { Filter } from "aws-cdk-lib/aws-sns";
const resolvers = {
  Query: {
    search: (filter : Filter) => {
       return new BooksService().findByTitle(filter);
    },
  },
};

export default resolvers