import app from "app";
import { env } from "config";

app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}`));