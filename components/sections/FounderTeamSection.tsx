import Link from "next/link";

type FounderTeamSectionProps = {
  variant?: "home" | "about";
};

export default function FounderTeamSection({
  variant = "home",
}: FounderTeamSectionProps) {
  return (
    <section className={`founder-team section-pad${variant === "home" ? " founder-team-home" : ""}`}>
      <div className="founder-team-heading">
        <div>
          <h2>
            The people
            <br />
            <i>behind the braids.</i>
          </h2>
          <p>
            Meet Aurelia’s founder and the team who make each appointment personal.
          </p>
        </div>
        {variant === "home" && (
          <Link className="text-link" href="/about">
            MORE ABOUT THE STUDIO <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="profile-content-grid">
        <article className="profile-content-note">
          <p>THE FOUNDER</p>
          <h3>A story to be told.</h3>
          <span>
            Add the founder’s name, approved portrait, and own account of how Aurelia Hair Studio
            began.
          </span>
        </article>
        <article className="profile-content-note">
          <p>THE STUDIO TEAM</p>
          <h3>The hands behind each look.</h3>
          <span>
            Add each team member’s name, role, approved portrait, and introduction when those
            details are supplied by the studio.
          </span>
        </article>
      </div>
    </section>
  );
}
