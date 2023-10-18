'use client'
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { app, auth, db, provider } from '../shared/firebaseConfig'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { doc, setDoc } from 'firebase/firestore'
import { Context } from '@/context/Context'

export default function page() {

    const { userData, setUserData, isLogedIn, setIsLogedIn } = useContext(Context);
    const router = useRouter();

    function login() {
        signInWithPopup(auth, provider).then((res) => {
            localStorage.setItem('isLogedIn', true);

            onAuthStateChanged(auth, async(user) => {
                if (user) {
                    const uid = user.uid;
                    let data = {
                        username: user.displayName,
                        email: user.email,
                        image: user.photoURL
                    }
                    await setDoc(doc(db, 'users', uid), data);
                    setUserData(data);
                    localStorage.setItem("user",JSON.stringify(data));
                }
                else {
                    null
                }
            });


            setIsLogedIn(true);
            router.push('/');
        })
    }

    return (
        <div className='items-center w-[600px] mx-auto justify-center flex bg-no-repeat bg-cover bg-[url(https://cdn3.iconfinder.com/data/icons/eziconic-v1-0/256/02.png)] p-5 flex-row h-[600px]'>
            <button className='bg-black text-white flex flex-row gap-4 font-bold p-5 text-2xl' onClick={login}><FcGoogle size={35} />Login with google</button>
        </div>
    )
}
