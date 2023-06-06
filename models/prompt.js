import { Schema, model, models } from "mongoose"

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
})

// Since the route gets called every time the connection is established,
// we check if the model already exists in models or create a new model
const Prompt = models.Prompt || model("Prompt", PromptSchema)

export default Prompt