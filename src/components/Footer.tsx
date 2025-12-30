export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
