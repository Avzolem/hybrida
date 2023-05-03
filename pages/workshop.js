import { useEffect } from "react";

export default function Workshop() {
    useEffect(() => {
        window.location.href =
            "https://cotton-lung-cdb.notion.site/15329b1441d34f92ac5a44548ed9950d?v=7494f390fea64f72b9a04e073d261b79";
    }, []);

    return (
        <div>
            <p>Redirecting to Workshop</p>
        </div>
    );
}
