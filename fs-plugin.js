import fs from "fs";
import path from "path";
import matter from "gray-matter";
const getBlogEntries = () => {
  let blogEntries = [];
  const blogPath = "src/routes/blog";
  const blogDirs = fs.readdirSync(path.join(blogPath));
  blogDirs.forEach((blog) => {
    //check if its a folder or not
    if (!fs.lstatSync(path.join(blogPath, blog)).isDirectory()) {
      return;
    }

    const fileContents = fs.readFileSync(
      path.join(blogPath, blog, "index.mdx"),
    );

    const { data } = matter(fileContents);
    const title =
      data == undefined || data.title == undefined ? blog : data.title;
    data.description =
      data.description == undefined ? "no description" : data.description;

    if (blogEntries.find((e) => e.title == title)) {
      return;
    }

    blogEntries = [
      ...blogEntries,
      {
        title: title,
        description: data.description,
        date: data.date,
        link: `/blog/${blog}`,
      },
    ];
  });

  return blogEntries;
};

export default function jsonBuilderPlugin() {
  return {
    name: "json-builder-plugin",

    configResolved() {
      const jsonData = getBlogEntries();
      // Path to the JSON file
      const jsonFilePath = path.resolve(__dirname, "src", "data.json");
      // Path to the TypeScript declaration file
      const declarationFilePath = path.resolve(__dirname, "types", "data.d.ts");

      // Convert JSON data to string
      const jsonString = JSON.stringify(jsonData, null, 2);

      try {
        // Write JSON string to file
        fs.writeFileSync(jsonFilePath, jsonString);

        // Generate TypeScript declaration file
        const typeDeclaration = `export interface BlogEntry {
  title: string;
  description: string;
  date: string;
  link: string;
}`;
        fs.writeFileSync(declarationFilePath, typeDeclaration);
      } catch (error) {}
    },
  };
}
