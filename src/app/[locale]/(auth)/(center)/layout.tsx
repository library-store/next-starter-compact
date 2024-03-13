import { redirect } from 'next/navigation';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  // Redirect to the home page if the user is already signed in

  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
