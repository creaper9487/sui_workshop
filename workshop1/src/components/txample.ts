import { Transaction } from "@mysten/sui/transactions";

export function txampleFactory(tx: Transaction):Transaction{
    tx.moveCall({
        target:"",
        arguments:[],
        typeArguments:[]
    })
    return tx;
}