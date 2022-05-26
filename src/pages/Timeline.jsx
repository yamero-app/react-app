import Feed from '../components/Feed';
import Layout from '../components/Layout';

export default function Timeline() {
  return (
    <>
      <div className="lg:ml-64 top-0 z-50 bg-blue-500 shadow-lg">
        <p className="py-3 text-white font-medium tracking-wide ml-10">
          ⚠️ FYI: All the user identities are hidden, so everyone can share
          their issues freely.
        </p>
      </div>
      <Layout>
        <Feed />
      </Layout>
    </>
  );
}
