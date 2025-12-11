

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          padding: 2rem 0;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
