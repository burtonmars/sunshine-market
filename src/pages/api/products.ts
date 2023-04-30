import type { NextApiRequest, NextApiResponse } from 'next';

const { connectToDatabase } = require('../../../lib/mongodb.js');
const ObjectId = require('mongodb').ObjectId;

type Product = {
  name: string,
  origin: string,
  distance: number,
  price: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }
    }
}

async function getPosts(req: NextApiRequest, res: NextApiResponse){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let products = await db
            .collection('products')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(products)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error().message,
            success: false,
        });
    }
}