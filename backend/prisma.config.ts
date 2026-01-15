import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

type Env = {
  DATABASE_URL: string
}

export default defineConfig({
  datasources: {
    db: {
      kind: 'postgresql',
      url: env<Env>('DATABASE_URL'),
    },
  },
})