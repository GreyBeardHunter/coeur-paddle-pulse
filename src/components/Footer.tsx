const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-lg text-primary-foreground">CDA Outrigger</p>
            <p className="font-body text-sm text-primary-foreground/60">Coeur d'Alene Outrigger Canoe Club</p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">About</a>
            <a href="#schedule" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Schedule</a>
            <a href="#join" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Join</a>
            <a href="#contact" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</a>
          </div>
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} CDA Outrigger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
