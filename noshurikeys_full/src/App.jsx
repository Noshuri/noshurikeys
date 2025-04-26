
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>NoShuriKeys 🔑</h1>
      <p style={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
        Welcome to NoShuriKeys — your trusted key source for exclusive Roblox scripts. Secure payments. Fast delivery.
      </p>

      <a
        href="https://noshurikeys.sell.app"
        style={{
          backgroundColor: 'white',
          color: 'black',
          fontWeight: '600',
          padding: '0.5rem 1.5rem',
          borderRadius: '1rem',
          textDecoration: 'none',
          marginBottom: '2rem',
          boxShadow: '0 0 10px rgba(255,255,255,0.2)'
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        💸 Buy Now
      </a>

      <section style={{
        width: '100%',
        maxWidth: '700px',
        backgroundColor: '#1f1f1f',
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>How to Use</h2>
        <ol style={{ paddingLeft: '1.25rem' }}>
          <li>Run the script in your Roblox executor (e.g. Fluxus, Synapse).</li>
          <li>You'll be prompted to get a key — click the link to purchase.</li>
          <li>Once purchased, join our Discord to redeem it with support.</li>
        </ol>
      </section>

      <section style={{
        width: '100%',
        maxWidth: '700px',
        backgroundColor: '#1f1f1f',
        borderRadius: '1rem',
        padding: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Need Help? Join the Discord</h2>
        <a
          href="https://discord.gg/GpQtSpwmfY"
          style={{
            backgroundColor: '#6366f1',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Join Now
        </a>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem', color: 'gray' }}>
        © {currentYear} NoShuriKeys
      </footer>
    </main>
  );
}
