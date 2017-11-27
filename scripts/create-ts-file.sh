#!/bin/bash

echo "import gql from 'graphql-tag'" > ./lib/graphql/schema.ts
echo "export const schema = gql\`" >> ./lib/graphql/schema.ts
cat "lib/graphql/schema.graphql" >> ./lib/graphql/schema.ts
echo "\`" >> ./lib/graphql/schema.ts
