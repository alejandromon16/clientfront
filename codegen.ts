
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.APOLLO_URI,
  documents: "document.graphql",
  generates: {
    'types.ts': {
      plugins: ['typescript', 'typescript-operations','typescript-react-query'],
      config: {
        fetcher: 'graphql-request'
      }
    },
  }
};

export default config;


