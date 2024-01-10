import { useEffect, useMemo, useState } from 'react';
import * as anchor from '@project-serum/anchor'
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SystemProgram } from '@solana/web3.js';
import { PROGRAM_PUBKEY } from '../constants';
import { IDL } from '../constants/idl'
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { CreatorProfile } from 'constants/types';

export function useDonate(connection: anchor.web3.Connection, publicKey: PublicKey | null) {
    const anchorWallet = useAnchorWallet();
    const [txPending, setTxPending] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [profile, setProfile] = useState<null | CreatorProfile>(null)
    const [creators, setCreators] = useState<CreatorProfile[]>([])


    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions());

            return new anchor.Program(IDL as any, PROGRAM_PUBKEY, provider)
        }

    }, [connection, anchorWallet])


    useEffect(() => {
        const getProfile = async () => {
            if (!loading && anchorWallet && publicKey) {
                try {
                    setLoading(true)
                    const [profilePda, profileBump] = findProgramAddressSync([utf8.encode('CREATOR_STATE'), publicKey.toBuffer()], program.programId);
                    const profile = await program?.account.creatorProfile.fetch(profilePda);
                    setProfile(profile as any)
                } catch (err) { console.log(err) }
                finally { setLoading(false) }
            }
        }

        const getCreators = async () => {
            if (!loading && anchorWallet && publicKey) {
                try {
                    setLoading(true)
                    const creators = await program?.account.creatorProfile.all();
                    setCreators(creators as any)
                } catch (err) {
                    console.log(err)
                } finally {
                    setLoading(false)
                }
            }
        }
        Promise.all([getCreators(), getProfile()]);


    }, [anchorWallet, connection, publicKey])


    const initializeCreator = async (nameCreator: string, field: string) => {
        if (program && !txPending && publicKey) {
            try {
                setTxPending(true);
                const [profilePda, profileBump] = findProgramAddressSync([utf8.encode('CREATOR_STATE'), publicKey.toBuffer()], program.programId);

                const tx = await program.methods.initializeCreator(nameCreator, field).accounts({
                    authority: publicKey,
                    creatorProfile: profilePda,
                    systemProgram: SystemProgram.programId
                }).rpc()
            } catch (err) {
                console.log(err)
            }
            finally {
                setTxPending(false)
            }

        }
    }


    return { txPending, loading, initializeCreator, profile, creators }
}