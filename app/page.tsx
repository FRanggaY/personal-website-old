import { redirect } from 'next/navigation';

export default async function Home() {
  // COMING SOON (checking user location then select automatically language)
  redirect('/en-us');
}
