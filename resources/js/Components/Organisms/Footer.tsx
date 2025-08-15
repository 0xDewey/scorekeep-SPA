import { FooterLink } from "@/Components/Atoms/FooterLink";

interface FooterLinkProps {
    link: string;
    innerText: string;
}

export default function Footer() {
    const footerLinks: Array<FooterLinkProps> = [
        { link: "/privacy-policy", innerText: "Politique de confidentialité" },
        { link: "/cgu", innerText: "Conditions générales d'utilisations" },
    ];

    return (
        <footer className={"mt-8 border-t pt-6"}>
            <div
                className={
                    "flex flex-col sm:flex-row sm:justify-between items-start sm:items-center space-y-4 sm:space-y-0"
                }
            >
                <div className={"flex space-x-4"}>
                    {footerLinks.map((obj, key) => (
                        <FooterLink
                            link={obj.link}
                            innerText={obj.innerText}
                            key={key}
                        />
                    ))}
                </div>

                <div className={"text-sm text-gray-500"}>
                    <h5 className="m-0">
                        Tous droits réservés - &copy; DoWeDev
                    </h5>
                </div>
            </div>
        </footer>
    );
}
