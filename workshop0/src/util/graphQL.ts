import { SuiGraphQLClient } from '@mysten/sui/graphql';
import { graphql } from '@mysten/sui/graphql/schema';

const gqlClient = new SuiGraphQLClient({
	url: 'https://graphql.testnet.sui.io/graphql',
	network: 'testnet',
});

// You can still use coreAPI methods with this utility, but it also allows you to make custom GraphQL queries

//example

const chainIdentifierQuery = graphql(`
	query {
		chainIdentifier
	}
`);

async function getChainIdentifier() {
    const result = await gqlClient.query({
		query: chainIdentifierQuery,
        variables: {},
	});
    
	return result.data?.chainIdentifier;
}