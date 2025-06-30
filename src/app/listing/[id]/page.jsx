import ListingDetailsClient from '@/components/ListingDetailsClient';

export default async function Listing({ params }) {
  const { id } = params;
  let listing = null;
  try {
    const result = await fetch(process.env.URL + '/api/listing/get', {
      method: 'POST',
      body: JSON.stringify({ listingId: id }),
      cache: 'no-store',
    });
    const data = await result.json();
    listing = data[0];
  } catch (error) {
    listing = { title: 'Failed to load listing' };
  }
  if (!listing || listing.name === 'Failed to load listing') {
    return (
      <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h2 className='text-xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-2xl'>
          Listing not found
        </h2>
      </main>
    );
  }
  return <ListingDetailsClient listing={listing} />;
}
  