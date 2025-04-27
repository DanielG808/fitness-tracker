import Footer from "@/components/footer";
import LoginForm from "@/components/login-form";
import Logo from "@/components/logo";

export default function LoginPage() {
  return (
    <main>
      <Logo testId="login-page-logo" />
      <LoginForm />
      <Footer className="text-black" />
    </main>
  );
}
