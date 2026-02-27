import { useState, useEffect } from "react";
import { dAppKit } from "./util/dapp-kit";
import { useCurrentAccount } from "@mysten/dapp-kit-react";
import { SuiClientTypes } from "@mysten/sui/client";

export function Home() {
    const curAcc = useCurrentAccount()
    const [addr, setAddr] = useState<string>("")
    const client = dAppKit.getClient("testnet")
    const [coins, setCoins] = useState<SuiClientTypes.Balance[]>([])
    // update the address when the current account changes
    useEffect(() => {
        setAddr(curAcc?.address || "")
    }, [curAcc?.address])
    // fetch the coins owned by the current account when the address changes
    useEffect(() => {
        if (!addr) return
        const result = client.listBalances({
            owner: curAcc?.address || "",
        })
        result.then((res) => {
            setCoins(res.balances)
        })
    }, [addr])

    return(
        <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
            <p className="text-2xl">Current Account: {addr || "Not connected"}</p>
            <div>
                <p>Owned Coins:</p>
                {coins.map((coin, i) => (
                    <p key={i}>{coin.coinType}: {coin.balance}</p>
                ))}
            </div>

            <p className="text-bold text-5xl ">Your query:</p>
            <div>
                {/* use method to display your own queries. */}
            </div>
        </div>
    )
}