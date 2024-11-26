import { useState, useEffect } from "react";
import { auth } from "@/db/configFirebase"
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider()

const useClientAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    // const [isFetch, setIsFetch] = useState
}
