import Footer from "@/components/footer";
import LoginForm from "@/components/login-form";
import Logo from "@/components/logo";

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full p-4">
      <Logo
        testId="login-page-logo"
        className="flex flex-start w-full text-black/85"
      />
      <LoginForm />
      <Footer className="text-black/65" />
    </main>
  );
}
