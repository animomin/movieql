const jaemin = {
  name: "SeoJaemin",
  age: 32,
  gender: "male"
};
const resolvers = {
  Query: {
    pserson: () => jaemin
  }
};

export default resolvers;
