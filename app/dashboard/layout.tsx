import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect('/login');
  }

  return children;
}
