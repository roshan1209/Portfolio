export default function Footer() {
    return (
        <footer className="py-8 border-t border-border text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
                <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors"
                   href="#">Home</a>
                <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors"
                   href="#projects">Projects</a>
                <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors"
                   href="#contact">Contact</a>
            </div>
            <p className="text-muted-foreground/90 text-sm">©{new Date().getFullYear()} Roshan Britto. All rights
                reserved.</p>
        </footer>
    );
}