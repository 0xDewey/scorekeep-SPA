import { Link } from "@inertiajs/react";

interface TeamCardProps {
    teamName: string;
    logoPath: string;
    link: string;
}

export default function TeamCard({ teamName, logoPath, link }: TeamCardProps) {
    return (
        <Link href={link} className="block">
            <div
                className={
                    "flex flex-col items-center space-y-2 p-3 rounded-md hover:bg-gray-50"
                }
            >
                <img
                    src={logoPath}
                    alt={`Logo de ${teamName}`}
                    height={80}
                    width={80}
                    className="rounded"
                />
                <p className="text-sm font-medium text-gray-700">{teamName}</p>
            </div>
        </Link>
    );
}
