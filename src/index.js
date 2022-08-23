const { ApolloServer } = require("apollo-server");
import fs from "fs";
import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";

import resolvers from "./resolvers";
import datasources from "./datasources";

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  datasources,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
