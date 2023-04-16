import books from "../../assets/index";
import { Book } from "../../domain/Types/books";
import { Filter } from "aws-cdk-lib/aws-sns";

export class BooksService {
  public async findByTitle(filter: Filter): Promise<Book[] | undefined> {
    try {
      let filterdBooks: Book[] = [];
      (await books).forEach((element) => {
        // check for title match in json response
        if (element.title === filter) {
          filterdBooks.push(element);
        }
      });
      // sort response
      const sortedResponse: Book[] = filterdBooks.sort((a, b) => {
        return Number(a.ratings_count) - Number(b.ratings_count);
      });
      return sortedResponse;
    } catch (error) {
      console.error(error);
    }
  }
}
