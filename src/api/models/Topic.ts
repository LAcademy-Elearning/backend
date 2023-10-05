import { Schema, model, Document, SchemaTypes } from 'mongoose';



const schema = new Schema(
        {
                name: {
                        type: String,
                        required: true,
                },
                content: {
                        type: Schema.Types.Mixed,
                        required: true,
                },
                description: {
                        type: String,
                        required: true,
                }

        },
        {
                timestamps: true,
        }
);

const Topic = model('Topic', schema);

export default Topic;
