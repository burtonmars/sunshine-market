import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
// export const env = createEnv({
//   server: {
//     NEXT_PUBLIC_MONGODB_URI: z.string().min(1),
//   },
//   runtimeEnv: {
//     MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI
//   },
// });