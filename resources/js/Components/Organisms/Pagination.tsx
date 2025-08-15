import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

interface LinkType {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    links: LinkType[];
}

export default function Pagination({ links }: PaginationProps) {
    function getClassName(active: boolean): string {
        if (active) {
            return "mr-1 mb-1 px-4 py-2 leading-4 border rounded bg-primary text-white";
        } else {
            return "mr-1 mb-1 px-4 py-2 leading-4 border rounded bg-white text-text hover:bg-gray-50";
        }
    }

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8 justify-center">
                    {links.map((link: LinkType, key: number) =>
                        link.url === null ? (
                            <div
                                key={key}
                                className="mr-1 mb-1 px-4 py-3 leading-4 border rounded"
                            >
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                key={key}
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                {key === 0 && (
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                )}
                                {link.label}

                                {key === links.length - 1 && (
                                    <FontAwesomeIcon icon={faArrowRight} />
                                )}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}
