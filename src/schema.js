export const schema = `
type User {
  id: ID! 
  name: String
  email: String

}

input UserInput {
  name: String
  email: String
}

type Plant{
  name: String!
  id: ID!
  userId: ID!
  images: [String!]!
  type: String!
  tags: [String!]
  description: String
  donate: Boolean
  swap: Boolean
  sell: Boolean
  price: Float
  amount: Int
}

input PlantInput{
  name: String!
  images: [String!]!
  type: String!
  tags: [String!]
  description: String
  donate: Boolean
  swap: Boolean
  sell: Boolean
  price: Float
  amount: Int
}

type Query {
  getUser(id: ID!): User
  getPlant(id: ID!): Plant
  getAllPlants: [Plant!]!
}

type Mutation {
  createUser(input: UserInput): User
  createPlant(input: PlantInput): Plant
}`;
