import * as fs from "fs";
import * as readLine from "readline";
import * as path from "path";

const booksInJson = async () => {
  // const books = fs.readFileSync(process.cwd() + "/lib/assets/books.csv", {
  //   encoding: "utf-8",
  // });

  let input = fs.createReadStream("./books.csv");
  let rl = readLine.createInterface({ input });
  rl.setPrompt("OHAI> ");
  rl.prompt();
  let data: any[] = [];
  rl.on("line", (row: string) => {
    data.push(row.split(","));
    //  write data to a file
    let stream = fs.createWriteStream("books.json");
    stream.once("open", function (fd) {
      stream.write(data);
      stream.end();
    });
  });
  rl.on("close", () => {
    console.log(data);
  });
  return data;
};
export default booksInJson();
