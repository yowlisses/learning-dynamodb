import AWS from 'aws-sdk';
import { generateRandomId } from '../utils/generateRandomId.js';

export async function createPlant({ input }, req) {
  if (!req.user) throw new Error('Not authenticated');

  const docClient = new AWS.DynamoDB.DocumentClient();
  const id = generateRandomId();

  const newItem = { id, ...input, userId: req.user.id };

  const params = {
    TableName: 'Plants',
    Item: newItem,
  };

  return new Promise(
    (resolve, reject) => docClient.put(params, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newItem);
      }
    }),
  );
}
