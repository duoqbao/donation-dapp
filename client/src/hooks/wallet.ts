import * as anchor from '@project-serum/anchor'
import { LAMPORTS_PER_SOL, ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
export function useAppWallet(connection: anchor.web3.Connection, publicKey: PublicKey | null,) {
    const [balance, setBalance] = useState<number>(0);
    const [loadingWalletBalance, setLoading] = useState<boolean>(false)
    const [requesting, setRequesting] = useState<boolean>(false)
    useEffect(() => {
        const getBalance = async () => {
            if (publicKey) {
                setLoading(true)
                const total = await connection.getBalance(publicKey);
                setBalance(total / LAMPORTS_PER_SOL)
                setLoading(false)
            }

        }
        getBalance()

    }, [publicKey, connection, , requesting])

    const requestAirdrop = async () => {
        if (connection && publicKey) {
            try {
                setRequesting(true)
                const signAirdrop = await connection.requestAirdrop(publicKey as PublicKey, 1 * LAMPORTS_PER_SOL)
                await connection.confirmTransaction(signAirdrop)
            } catch (err: any) {
                alert(err)
            } finally {
                setRequesting(false)
            }
        } else {
            console.log(connection, publicKey)
        }
    }

    return { balance, loadingWalletBalance, requestAirdrop, requesting }
}