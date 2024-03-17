// import { redirect } from 'next/navigation';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  // Redirect to the home page if the user is already signed in

  return (
    <div className="min-h-screen">
      {props.children}
    </div>
  );
}
