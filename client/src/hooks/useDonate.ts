import { useEffect, useMemo, useState } from 'react';
import * as anchor from '@project-serum/anchor'
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { PROGRAM_PUBKEY } from '../constants';
import { IDL } from '../constants/idl'

export function useDonate(connection: anchor.web3.Connection, publicKey: PublicKey | null) {
    const anchorWallet = useAnchorWallet();
    const [txPending, setTxPending] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions());

            return new anchor.Program(IDL as any, PROGRAM_PUBKEY, provider)
        }

    }, [connection, anchorWallet])




    useEffect(() => { }, [])


    const initializeCreator = async () => {

    }

}