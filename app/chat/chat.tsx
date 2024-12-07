"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Github } from "lucide-react";
import { auth } from "@/lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
  const [user, loading, error] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

  const SignInWithGoogle = async () => {
    const userCredential = await signInWithPopup(auth, googleAuth);
    const user = userCredential.user;
    console.log(user);
  };

  const SignInWithGithub = async () => {
    const userCredential = await signInWithPopup(auth, githubAuth);
    const user = userCredential.user;
    console.log(user);
  };

  return (
    <>
      <h1 className="text-xl font-semibold tracking-tight">Let's talk🙌</h1>
      <p className="mt-5 leading-loose h-full">
        Sign in with Google or Github, and let me know what you think about the
        website!
      </p>
      <div className={`${user ? "hidden" : "flex"} mt-5 flex-wrap gap-2`}>
        <Button size="sm" variant="outline" onClick={SignInWithGoogle}>
          <Image src="/google.webp" alt="g" width={15} height={15} />
          Sign in with Google
        </Button>
        <Button size="sm" variant="outline" onClick={SignInWithGithub}>
          <Github />
          Sign in with Github
        </Button>
      </div>
      <div className="mt-7 relative">
        <div className="h-[30rem] overflow-y-auto pt-10 flex flex-col-reverse">
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end gap-x-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div>
              <div className="max-w-72 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-900 rounded-[15px] text-sm -translate-x-2">
                Keren Banget Om Website nyaa
              </div>
              <p className="text-xs pt-1 text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
        </div>
        <form
          className={`bg-zinc-50 dark:bg-zinc-900 py-2 px-4 ${
            user ? "flex" : "hidden"
          }  items-center gap-x-4 rounded-b-lg`}
        >
          <div>
            <div
              className="w-7 h-7 rounded-full bg-red-500 cursor-pointer overflow-hidden"
              onClick={() => auth.signOut()}
            >
              <Image
                src={user?.photoURL || "/google.webp"}
                alt="i"
                width={50}
                height={50}
              />
            </div>
          </div>
          <Input
            type="text"
            placeholder="Aa"
            className="bg-transparent px-4 rounded-full focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          <div>
            <Button className="rounded-full" size="icon" variant="secondary">
              <SendHorizontal />
            </Button>
          </div>
        </form>

        <div className="absolute left-0 top-0 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent w-full h-10"></div>
        <div
          className={`absolute left-0 bottom-0 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent w-full h-10 ${
            user ? "hidden" : "block"
          } `}
        ></div>
      </div>
      {/* <p className="mt-5 text-sm leading-loose font-[family-name:var(--font-geist-mono)]">
        Feature is on the way!
      </p> */}
    </>
  );
}
