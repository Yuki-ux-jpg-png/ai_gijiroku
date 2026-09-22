import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignUp
            routing="hash"
            signInUrl="/login"
            fallbackRedirectUrl="/dashboard"
            signInFallbackRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </main>
  );
}
