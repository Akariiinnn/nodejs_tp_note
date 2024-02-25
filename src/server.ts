import express from 'express';
import routes from './routes/index';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', routes);

mongoose.connect('mongodb+srv://{{IP_MongoDB}}/?retryWrites=true&w=majority')
    .then(() => {
        console.log('mongodb est connecté')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch((error) => {
        console.log('mongo est pas co !\n' + error)
    })
