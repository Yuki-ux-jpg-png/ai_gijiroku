import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <main className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignIn
            routing="hash"
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/dashboard"
            signUpFallbackRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </main>
  );
}
