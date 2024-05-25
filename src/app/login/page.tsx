import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";

export default function LoginPage() {
  return (
    <main className=" flex justify-center items-center h-screen">
      <div className="w-[400px] p-10 rounded-xl border border-gray-500 ">
        <div className=" flex flex-col gap-5">
            <h2 className=" uppercase text-xl font-semibold text-center">Sign in to continue</h2>
          <form action={actions.signInWithGoogle}>
            <FormButton img={"/google.png"} buttonText="Google" />
          </form>
          <form action={actions.signInWithGitHub}>
            <FormButton img={"/github.png"} buttonText="GitHub" />
          </form>
        </div>
      </div>
    </main>
  );
}
