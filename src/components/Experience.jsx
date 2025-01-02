    import "../styles/Experience.css";

    const backendSkills = {
    "Node.js": "Intermediate",
    "Express.js": "Intermediate",
    "Databases (SQL/NoSQL)": "Experienced",
    "RESTful APIs": "Experienced",
    "Authentication (JWT, OAuth)": "Intermediate",
    "Version Control (Git)": "Intermediate",
    };

    export default function Experience() {
    const frontendSkills = {
        HTML: "Experienced",
        CSS: "Experienced",
        JavaScript: "Intermediate",
        React: "Intermediate",
        Responsive: "Experienced",
        GIT: "Intermediate",
    };
    return (
        <div id="Experience">
        <p className="text-center regular-text">explore my</p>
        <h1 className="text-center heading">experience</h1>
        <div className="experience-wrapper flex gap-1">
            <article>
            <p className="text-center regular-text">frontend development</p>
            {Object.entries(frontendSkills).map(([key, value]) => {
                return (
                <div className="flex gap-1">
                    <i class="ri-checkbox-circle-fill ri-2x"></i>
                    <div className="flex flex-column">
                    <span className="font-1">{key}</span>
                    <span>{value}</span>
                    </div>
                </div>
                );
            })}
            </article>
            <article>
            <p className="regular-text text-center">backend development</p>
            {Object.entries(backendSkills).map(([key, value]) => {
                return (
                <div className="flex gap-1">
                    <i class="ri-checkbox-circle-fill ri-2x"></i>
                    <div className="flex flex-column">
                    <span className="font-1">{key}</span>
                    <span>{value}</span>
                    </div>
                </div>
                );
            })}
            </article>
        </div>
        </div>
    );
    }
