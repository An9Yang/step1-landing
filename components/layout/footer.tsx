import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-lg">Step1</span>
                        <p className="text-muted-foreground">© {new Date().getFullYear()} Step1 Inc.</p>
                    </div>

                    <div className="flex gap-8 text-muted-foreground">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
